import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: 'Fidan'
        }
    }
    render() {
        return (
            <div className="table__container">
            <div className="table__question">
                <p>Выберите размер данных</p>
                <button className="table__question-small button">Небольшая выборка данных</button>
                <button className="table__question-large button">Все данные</button>
            </div>
            <table className="table-data">
                <tbody>
                    <tr className="table-data__title">
                        <th>id</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>email</th>
                        <th>Phone</th>
                    </tr>
                    <tr className="table-data__content">
                        <td>данные</td>
                        <td>данные</td>
                        <td>данные</td>
                        <td>данные</td>
                        <td>данные</td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }
}

render(<App/>,document.getElementById('table__app'));