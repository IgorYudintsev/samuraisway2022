import React from 'react';
import {Dialogs} from "./Dialogs";
import {sendMessageAC, updateNewMessageBodyCreatorAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {reducersType} from "../../redux/redux-store";



const mapStateToProps = (state: reducersType) => {
    // console.log(state.dialogsPage)
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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