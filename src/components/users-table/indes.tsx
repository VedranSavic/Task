import React from "react";
import { useTable, Column, useSortBy, usePagination } from "react-table";
import UsersTableRow from "../users-table-row";
import './index.css';
import { UsersArrayType, UserType, Company } from "../../types/types";

const UsersTable = (props: UsersArrayType) => {
  const users: UserType[] = props.users;
  
  const data = React.useMemo(() => users, [users]);

  const columns: Column<UserType>[] = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        id: "userName"
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Company",
        accessor: "company"
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data }, useSortBy, usePagination);

  const pageOptions = React.useMemo(
    () => [5, { value: data.length, label: "All" }],
    [data.length]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, sortBy },
  } = useTable(
    {
      columns,
      data: users,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="users-table-container">
      <table className="users-table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "desc"
                        : "asc"
                      : ""
                  }
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <UsersTableRow
                name={row.original.name}
                address={row.original.address}
                phone={row.original.phone}
                company={row.original.company}
                key={i}
              />
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UsersTable;
