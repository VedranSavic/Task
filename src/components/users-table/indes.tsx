import React from "react";
import UsersTableRow from "../users-table-row";
import './index.css';
import { UsersArrayType } from "../../types/types";

const UsersTable = (props: UsersArrayType) => {
    return (
        <div className="users-table-container">
        <table className="users-table">
            <tr className="header-row">
                <td>Name</td>
                <td>Address</td>
                <td>Phone</td>
                <td>Company name</td>
            </tr>
            {props.users.map(userData => {
                return <UsersTableRow name={userData.name} address={userData.address} phone={userData.phone} company={userData.company} />
            })}
        </table>
        </div>
    );
};

export default UsersTable;