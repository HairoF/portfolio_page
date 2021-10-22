import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

export default function Pagination(props) {
    let [currentPage, setCurrentPage] = useState(1);
    let [arrow, setArrow] = useState(null);

    const pageProps = Array.from( Array(props.pages).keys() );

    function onLinkClick(e) {
        const target = e.target;
        console.log('до эффекта',currentPage)
        if(target.tagName === 'A') {
            e.preventDefault();
            setArrow(target.dataset.page);
            
            if(target.dataset.page === 'prev') {
                let result = (currentPage - 1) > 0 ? (currentPage - 1) : 1 
                setCurrentPage(result);
            } else if(target.dataset.page === 'next') {
                setCurrentPage( (currentPage + 1 < props.pages + 1) ? currentPage + 1 : props.pages );
            } else {
                setCurrentPage(target.textContent);
            }
        }
    }
 
    useEffect( () => {
            console.log('после эффекта',currentPage)
            props.onPageClick(arrow, currentPage)
    },[currentPage])

    const elementsList = pageProps.map((el, i)=> {
        let p = Number(el) + 1;
        let href = `/:page=${p}`
        let condition = currentPage == p ? {current: ''} : {};
        return <li key={p+i}><a className="pagination" href={href} {...condition}>{p}</a></li>
    })
    return (
        <Ul className="pagination" onClick={onLinkClick}>
            {
                Number(currentPage) !== 1 
                    ? <li><a href="#" className="pagination" data-page="prev">Prev</a></li> 
                    : null
            }
            {elementsList}
            {
                Number(currentPage) !== Number(props.pages)
                    ? <li><a href="#" className="pagination" data-page="next">Next</a></li> 
                    : null
            }
        </Ul>
    )
}
const Ul = styled.ul`
    &.pagination {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        position: absolute;
        bottom: 0;
        left: 50%;
        right: 50%;
    }
    li {
        margin: 0 5px;
    }
    a {
        display: block;
        border-radius: 100%;
        width: 35px;
        height: 35px;
        text-align: center;
        line-height: 34px;
        background: #1f1f1f;
        transition: background 0.4s ease;
    }
    a:hover {
        box-shadow: 2px 2px 2px #101010;
    }
    a[current] {
        color: red;
        background: #101010;
    }
`;