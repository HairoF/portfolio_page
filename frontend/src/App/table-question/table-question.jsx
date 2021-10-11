import React from 'react';

export default function TableQuestion(props) {

    return (
        <div className="table__question">
            <p>Выберите размер данных</p>
            <button className="table__question-small button"
                    onClick={props.onHandleSmallClick}>
                Небольшая выборка данных
            </button>
            <button className="table__question-large button">Все данные</button>
        </div>
    )
} 