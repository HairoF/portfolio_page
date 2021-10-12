import React from 'react';
import TableFullInfo from '../table-full-info';

export default function TableBody({onTBClick, ...props}) {
    
    function onTableRowClick(e) {
        console.log(e.target.parentNode.dataset.index);
        const index = e.target.parentNode.dataset.index;

    }
    
    const trElements = props.data?.map( (td) => {
        return(
            <tr data-index={td.id} key={td.id} className="table-data__content">
                <td>{td.id}</td>
                <td>{td.firstName}</td>
                <td>{td.lastName}</td>
                <td>{td.email}</td>
                <td>{td.phone}</td>
            </tr>
        )
    });

    return (
        <tbody onClick={onTableRowClick}>
            <tr className="table-data__title">
                <th>id</th>
                <th>First name</th>
                <th>Last name</th>
                <th>email</th>
                <th>Phone</th>
            </tr>
            {props.data ? trElements : null}
        </tbody>
    )
}