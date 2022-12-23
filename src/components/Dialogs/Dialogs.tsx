import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";

export const Dialogs = () => {

    const dialogsData=[
        {
            id:1,
            name:'Igor'
        },
        {
            id:2,
            name:'Olga'
        },
        {
            id:3,
            name:'Sasha'
        },
    ]

    const messagesData=[
        {
            id:1,
            message:'Hi'
        },
        {
            id:2,
            message:'How are you?'
        },
        {
            id:3,
            message:'Hellow'
        },
    ]

    return (
        <Wrapper>
            <Left>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            </Left>
            <Right>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </Right>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;

`

const Left = styled.div`
  background-color: steelblue;
  width: 50%;
`

const Right = styled.div`
  background-color: #1e3786;
  width: 50%;
`