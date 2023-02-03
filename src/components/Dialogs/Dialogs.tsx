import React, {ChangeEvent} from 'react';
import styled from "styled-components";
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";
import {messagesPageType} from "../../redux/state";
import {sendMessageAC, updateNewMessageBodyCreatorAC} from "../../redux/dialogs-reducer";


type StateType = {
    state: messagesPageType
    dispatch: (action: any) => void
    // dialogs: DialogsType[]
    // messages: MessageType[]
}

export const Dialogs = (props: StateType) => {
    const newMessageBody = props.state.newMessageText
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

    const onSendmessageClickkhandler = () => {
        props.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBodyCreatorAC(e.currentTarget.value))
    }

    return (
        <Wrapper>
            <Left>
                {dialogs}
            </Left>
            <Right>
                {messages}
                <div><textarea
                    placeholder={'Enter your message'}
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                /></div>
                <div>
                    <button onClick={onSendmessageClickkhandler}>Add</button>
                </div>
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