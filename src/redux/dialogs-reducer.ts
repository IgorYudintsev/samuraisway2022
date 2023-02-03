import React from 'react';
import {messagesPageType} from "./state";

const SEND_MESSAGE = 'ADD-NEWPOSTTEXT'
const UPDATE_NEWPOSTTEXT = 'UPDATE-NEWPOSTTEXT'

export const DialogsReducer = (state: messagesPageType, action: any) => {
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