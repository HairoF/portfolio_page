import React, {Component} from 'react';
import {getData, getDatasPage} from './services';

import ChooseDataDiv from './choose-data-div';
import TableBody from './table-body';
import Pagination from './pagination';

import styled from 'styled-components'
import styles from './app.module.scss';


export default class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            clicked: {leftClicked: false, rightClicked: false},
            dataTable: [],
            pages: null
        };
        this.onSmallClick = this.onSmallClick.bind(this);
        this.handlePagination = this.handlePagination.bind(this);
    }
    onSmallClick(value,tagname) {
        if(tagname.indexOf('left') !== -1) {
            
            getData()
                .then( ({data,pages}) => {
                    this.setState( ()=> ({
                        clicked: {
                            leftClicked: true,
                            rightClicked: false
                        },
                        dataTable: data,
                        pages: Number(pages)
                    }))
                })
        }

        if(tagname.indexOf('right') !== -1) {
            console.log(`Text of this button is: ${value}`);
            this.setState( ()=> ({
                clicked: {
                    leftClicked: false,
                    rightClicked: true
                }
            }));
        }

    }

    handlePagination(arrow, page) {
        getDatasPage(arrow, page)
            .then( updatePage => {
                this.setState({
                    dataTable: updatePage
                })
            })
    }


    render() {
        const {leftClicked, rightClicked} = this.state.clicked;
        const dataTable = this.state.dataTable?.length > 0 ? this.state.dataTable : null;
        
        return (
            <TableContainerDiv>
                <ChooseDataDiv 
                    leftClicked={leftClicked}
                    rightClicked={rightClicked}
                    onHandleSmallClick={this.onSmallClick}
                />
                <table className={styles.tableData}>
                    <TableBody
                        onHandleSmallClick={this.onSmallClick} data={dataTable}/>
                </table>
                {this.state.pages ? <Pagination pages={this.state.pages} onPageClick={this.handlePagination}/> : null}
            </TableContainerDiv>
        )
    }
}

const TableContainerDiv = styled.div`
    position: relative;
    margin: 0 auto;
    text-align: center;
    max-width: 660px;
    min-height: 322px;
    width: 100%;
`;
