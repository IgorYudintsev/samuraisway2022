import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";
import {DialogsType, MessageType, PostType} from "../../index";

type dataType = {
    dialogs: DialogsType[]
    messages: MessageType[]
}

export const Dialogs = (props:dataType) => {

    const dialogs = props.dialogs.map(d => {
        return (
            <DialogItem name={d.name} id={d.id}/>
        )
    })

    const messages = props.messages.map(m => {
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