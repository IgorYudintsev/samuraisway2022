import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";

export const Dialogs = () => {

    const dialogsData = [
        {
            id: 1,
            name: 'Igor'
        },
        {
            id: 2,
            name: 'Olga'
        },
        {
            id: 3,
            name: 'Sasha'
        },
    ]

    const messagesData = [
        {
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'How are you?'
        },
        {
            id: 3,
            message: 'Hellow'
        },
    ]

    const dialogs = dialogsData.map(d => {
        return (
            <DialogItem name={d.name} id={d.id}/>
        )
    })

    const messages = messagesData.map(m => {
        return (
            <Message message={m.message}/>
        )
    })

    return (
        <Wrapper>
            <Left>
                {dialogs}
            </Left>
            <Right>
                {messages}
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