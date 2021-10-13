import React, {useState, useEffect} from 'react';
import TableFullInfo from '../table-full-info';

import styles from './table-body.module.scss';

export default function TableBody({onTBClick, ...props}) {
    const [trId, settrId] = useState({ind: null, obj: null});
    // const [selectObj, setSelectedObj] = useState({})
    // console.log(trId)


    async function onTableRowClick(e) {
        console.log('event', e.target.parentNode);
        const index = e.target.parentNode.dataset.index
        const selOb = await props?.data?.find( (el) => Number(el.id) === Number(index) );
        if(index) {
            settrId({
                ind: Number(index),
                obj:selOb
            });
        }
    }
    useEffect( () => {//componentDidUpdate in class component
        if(trId.ind) {
            document.querySelector(`tr[data-index="${trId.ind}"]`).setAttribute('data-show', '');
            return () => {
                document.querySelector(`tr[data-index="${trId.ind}"]`).removeAttribute('data-show', '');
            }
        }
    }, [trId.ind])
    
    // console.log('trid: ' + trId)

    const trElements = props.data?.map( (td,i) => {
        return(
            <tr data-index={td.id} key={td.id+i} className={styles.tableDataContent}>
                <td>{td.id}</td>
                <td>{td.firstName}</td>
                <td>{td.lastName}</td>
                <td>{td.email}</td>
                <td>{td.phone}</td>
            </tr>
        )
    });

 
    return (
        <tbody onClick={onTableRowClick.bind(this)}>
            <tr className="table-data__title">
                <th>id</th>
                <th>First name</th>
                <th>Last name</th>
                <th>email</th>
                <th>Phone</th>
            </tr>
            {props.data ? trElements : null}
            {trId.ind ? <TableFullInfo fullInfo={trId.obj}/> : null}
        </tbody>
    )
}