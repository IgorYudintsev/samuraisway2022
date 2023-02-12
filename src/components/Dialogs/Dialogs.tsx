import React, {ChangeEvent, useRef} from 'react';
import styled from "styled-components";
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";
import {messagesPageType} from "../../redux/store";


type StateType = {
    dialogsPage: messagesPageType
    onSendmessageClickkhandler: () => void
    onNewMessageChange: (newMessage: string) => void
}

export const Dialogs = (props: StateType) => {
    const newMessageBody = props.dialogsPage.newMessageText
    const dialogs = props.dialogsPage.dialogs.map(d => {
        return (
            <DialogItem name={d.name} id={d.id} key={d.id}/>
        )
    })
    const messages = props.dialogsPage.messages.map(m => {
        return (
            <Message message={m.message}  key={m.id}/>
        )
    })


    let newDialgElement = useRef<HTMLTextAreaElement>(null)

    const onSendmessageClickkhandler = () => {
        props.onSendmessageClickkhandler()
    }

    const onNewMessageChange = () => {
        if (newDialgElement.current) {
            let newText = newDialgElement.current.value
            console.log(newText)
            props.onNewMessageChange(newText)

        }
    }
    return (
        <Wrapper>
            <Left>
                {dialogs}
            </Left>
            <Right>
                {messages}
                <div><textarea
                    ref={newDialgElement}
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
