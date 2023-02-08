import React from 'react';
import {Dialogs} from "./Dialogs";
import {sendMessageAC, updateNewMessageBodyCreatorAC} from "../../redux/dialogs-reducer";
import {messagesPageType} from "../../redux/store";

type StateType = {
    state: messagesPageType
    dispatch: (action: any) => void

}

export const DialogsContainer = (props:StateType) => {

    const onSendmessageClickkhandler = () => {
        props.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (newMessage:string) => {
        props.dispatch(updateNewMessageBodyCreatorAC(newMessage))
    }
    return (
       <Dialogs
           state={props.state}
           onSendmessageClickkhandler={onSendmessageClickkhandler}
           onNewMessageChange={onNewMessageChange}
       />
    );
};

