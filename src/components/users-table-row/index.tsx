import React from "react";
import './index.css';
import { UserType } from "../../types/types";

const UsersTableRow = (props:UserType ) => {
    var fullAddress = props.address.city + "," + props.address.street + ", " + props.address.suite
    return (
        <tr className="users-table-row">
            <td>{props.name}</td>
            <td>{fullAddress}</td>
            <td>{props.phone}</td>
            <td>{props.company.name}</td>
        </tr>
    );

};

export default UsersTableRow;