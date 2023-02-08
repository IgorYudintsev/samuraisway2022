import React, {useContext} from 'react';
import {Dialogs} from "./Dialogs";
import {sendMessageAC, updateNewMessageBodyCreatorAC} from "../../redux/dialogs-reducer";
import {messagesPageType} from "../../redux/store";
import {StoreContext} from "../../StoreContext";

type StateType = {
    // state: messagesPageType
    // dispatch: (action: any) => void

}

export const DialogsContainer = (props:StateType) => {
    let consumer=useContext(StoreContext)

    const onSendmessageClickkhandler = () => {
        // props.dispatch(sendMessageAC())
      consumer.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (newMessage:string) => {
        consumer.dispatch(updateNewMessageBodyCreatorAC(newMessage))
    }
    return (
       <Dialogs
           state={consumer.getState().dialogsPage}
           onSendmessageClickkhandler={onSendmessageClickkhandler}
           onNewMessageChange={onNewMessageChange}
       />
    );
};

