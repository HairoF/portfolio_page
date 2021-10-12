import React from 'react';
import styled from 'styled-components';
export default function TableFullInfo(prop) {
    const {firstName,lastName,description,address} = prop.fullInfo;
    console.log(prop)
    return (
        <tr>
            <td colSpan="5">
                <div className="td__info">
                    <p>Выбран пользователь <b>{firstName + ' ' + lastName}</b></p>
                        <TextArea defaultValue={description}>
                            
                        </TextArea>
                    <p>Адрес проживания: <b>{address.streetAddress}</b></p>
                    <p>Город: <b>{address.city}</b></p>
                    <p>Провинция/штат: <b>{address.state}</b></p>
                    <p>Индекс: <b>{address.zip}</b></p>
                </div>
            </td>
        </tr>
    )
}
const TextArea = styled.textarea`
    padding: 7px;
    background: #1F1F1F;
    color: #fff;
    resize: none;
    width: 100%;
`;