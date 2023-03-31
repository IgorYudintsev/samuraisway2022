import React from 'react';
import {Dialogs} from "./Dialogs";
import {sendMessageAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {reducersType} from "../../redux/redux-store";
import {WithAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";


const mapStateToProps = (state: reducersType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        onSendmessageClickkhandler: (message: string) => {
            dispatch(sendMessageAC(message))
        },
    }
}


// const AuthRedirectComponent=WithAuthRedirectComponent(Dialogs)
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirectComponent
)(Dialogs)