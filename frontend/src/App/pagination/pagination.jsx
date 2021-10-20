import React, {useState} from 'react';
import styled from 'styled-components';

export default function Pagination(props) {
    // let [currentPage, setCurrentPage] = useState(1);
    const page = Array.from( Array(props.pages).keys() );

    function onLinkClick(e) {
        if(e.target.tagName === 'A') {
            e.preventDefault();

            props.onPageClick(e.target.textContent)
        }
    }

    const elementsList = page.map((el)=> {
        let href = `/:page=${Number(el) + 1}`
        return <li><a href={href} className="pagination">{Number(el) + 1}</a></li>
    })
    return (
        <Ul className="pagination" onClick={onLinkClick}>
            <li><a href="/:page1" className="pagination">Prev</a></li>
            {elementsList}
            <li><a href="/" className="pagination">Next</a></li>
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
        margin: 0 5px;
    }
    a {
        display: block;
        border: 1px solid blue;
        border-radius: 100%;
        width: 35px;
        height: 35px;
        text-align: center;
        line-height: 34px;

    }
`;