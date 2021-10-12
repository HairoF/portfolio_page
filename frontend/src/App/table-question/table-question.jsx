import React from 'react';
import styled from 'styled-components';



export default function ChooseDataDiv({onHandleSmallClick, leftClicked, rightClicked}) {
    function onSmallClick(e) {
        onHandleSmallClick(e.target.textContent, e.target.className)
    }

    return (
        <DivQuestion onClick={onSmallClick}>
            <p>Выберите размер данных</p>
            <Button lCli={leftClicked} className="left">
                Небольшая выборка данных
            </Button>
            <Button rCli={rightClicked} className="right">Все данные</Button>
        </DivQuestion>
    )
} 
const DivQuestion = styled.div`
    margin-bottom: 30px;
    p {
        text-align: center;
    }
`;

const Button = styled.button`

    font-weight: 400;
    text-align: center;
    background: ${(props) => props.lCli 
                                ? props.lCli ? "rgb(187, 187, 187)" : "rgb(249, 249, 249)"
                                : props.rCli ? "rgb(187, 187, 187)" : "rgb(249, 249, 249)"};
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    padding: .375rem .75rem;
    &:hover {
        background:rgb(187, 187, 187);
    }
    &.left {
        margin-right: 15px;
        border: 2px solid blue;

    }
    &.right {
        border: 2px solid green;

    }


`;
