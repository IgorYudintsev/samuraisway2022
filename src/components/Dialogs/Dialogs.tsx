import React from 'react';
import styled from "styled-components";
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";
import {messagesPageType} from "../../redux/state";


type StateType = {
    state: messagesPageType
    // dialogs: DialogsType[]
    // messages: MessageType[]
}

export const Dialogs = (props:StateType) => {

    const dialogs = props.state.dialogs.map(d => {
        return (
            <DialogItem name={d.name} id={d.id}/>
        )
    })

    const messages = props.state.messages.map(m => {
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