import React from 'react';
import styled from 'styled-components';

export default function Pagination(prop) {

    const page = Array.from( Array(prop.pages).keys() );
    console.log(page)
    const elementsList = page.map((el)=> {
        return <li>{Number(el) + 1}</li>
    })
    return (
        <Ul className="pagination">
            {elementsList}
            <li>Next</li>
        </Ul>
    )
}
const Ul = styled.ul`
    &.pagination {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    li {
        border: 1px solid grey;
        cursor: pointer;
        margin: 0 5px;
        padding: 0 5px;
    }
`;