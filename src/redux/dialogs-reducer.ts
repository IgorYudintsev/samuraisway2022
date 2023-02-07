import React from 'react';
import {DialogsType,  MessageType} from "./store";

const SEND_MESSAGE = 'ADD-NEWPOSTTEXT'
const UPDATE_NEWPOSTTEXT = 'UPDATE-NEWPOSTTEXT'

export type messagesPageType = {
    messages: MessageType[]
    dialogs: DialogsType[]
    newMessageText: string
}

let initialState:messagesPageType={
    dialogs: [
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
    ],
    messages: [
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
    ],
    newMessageText: ''
}

export const DialogsReducer = (state=initialState, action: any) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newPostText = {
                id: 1,
                message: state.newMessageText
            }
            state.messages.push(newPostText)
            state.newMessageText = ''
            return state
        }
        case UPDATE_NEWPOSTTEXT: {
            state.newMessageText = action.newMessageText
            return state
        }
        default:
            return state
    }
};

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE,
    }
}
export const updateNewMessageBodyCreatorAC = (text: string) => {
    return {
        type: UPDATE_NEWPOSTTEXT,
        newMessageText: text
    }
}