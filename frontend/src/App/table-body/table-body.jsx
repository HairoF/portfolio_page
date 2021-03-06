import React, {useState, useEffect} from 'react';
import TableFullInfo from '../table-full-info';

import styles from './table-body.module.scss';

export default function TableBody({onTBClick, ...props}) {
    const [trId, settrId] = useState({ind: null, obj: null});
    // const [selectObj, setSelectedObj] = useState({})
    console.log('trId i: ',trId)


    async function onTableRowClick(e) {
        const target = Number(e.target.parentNode.dataset.index);
        const index = target !== trId.ind ? target : 0;
        const selOb = await props?.data?.find( (el) => Number(el.id) === Number(index) );
        if(index !== null & index !== undefined) {
            console.log('condition 0 is work. Index is: ', index)
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
        const j = Math.random() + i
        return(
            <>
                <tr data-index={td.id} key={td.id+i} className={styles.tableDataContent}>
                    <td>{td.id}</td>
                    <td>{td.firstName}</td>
                    <td>{td.lastName}</td>
                    <td>{td.email}</td>
                    <td>{td.phone}</td>
                </tr>
                {trId.ind === td.id ? <TableFullInfo key={j} fullInfo={trId.obj}/> : null}
            </>
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
            
        </tbody>
    )
}