import React, {Component} from 'react';

import TableQuestion from './table-question';


export default class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: 'Fidan'
        }
        this.onSmallClick = this.onSmallClick.bind(this);
    }
    onSmallClick() {
        console.log("Получение небольшого датасета");
    }
    render() {
        return (
            <div className="table__container">
                <TableQuestion onHandleSmallClick={this.onSmallClick}/>
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