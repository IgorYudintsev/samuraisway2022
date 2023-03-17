import React from 'react';
import {Dialogs, StateDialogsType} from "./Dialogs";
import {sendMessageAC, updateNewMessageBodyCreatorAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {reducersType} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";
import {ProfileContainer} from "../Profile/ProfileContainer";
import {WithAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";



const mapStateToProps = (state: reducersType) => {
    // console.log(state.dialogsPage)
    return {
        dialogsPage: state.dialogsPage,
        // isAuth: state.auth.isAuth
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

const AuthRedirectComponent=WithAuthRedirectComponent(Dialogs)

// const AuthRedirectComponent=(props:StateDialogsType)=>{
//     if(!props.isAuth){
//         return <Navigate to={'/login'}/>
//     }
//     return  <Dialogs
//         dialogsPage={props.dialogsPage}
//         //isAuth={props.isAuth}
//         onSendmessageClickkhandler={props.onSendmessageClickkhandler}
//         onNewMessageChange={props.onNewMessageChange}
//     />
// }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export default DialogsContainer