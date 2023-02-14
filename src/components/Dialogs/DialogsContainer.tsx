import React from 'react';
import {Dialogs} from "./Dialogs";
import {sendMessageAC, updateNewMessageBodyCreatorAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";



const mapStateToProps = (state: StateType) => {
    console.log(state.dialogsPage)
    return {
        dialogsPage: state.dialogsPage,
      }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        onSendmessageClickkhandler: () => {
           dispatch(sendMessageAC())
        },
        onNewMessageChange: (newMessage: string) => {
            dispatch(updateNewMessageBodyCreatorAC(newMessage))
        }
    }
}



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer