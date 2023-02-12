import React from 'react';
import {Dialogs} from "./Dialogs";
import {sendMessageAC, updateNewMessageBodyCreatorAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {store} from "../../redux/redux-store";

type StateType = {
    // state: messagesPageType
    // dispatch: (action: any) => void

}

// export const DialogsContainer = (props: StateType) => {
//     let consumer = useContext(StoreContext)
//
//     const onSendmessageClickkhandler = () => {
//         // props.dispatch(sendMessageAC())
//         consumer.dispatch(sendMessageAC())
//     }
//
//     const onNewMessageChange = (newMessage: string) => {
//         consumer.dispatch(updateNewMessageBodyCreatorAC(newMessage))
//     }
//     return (
//         <Dialogs
//             state={consumer.getState().dialogsPage}
//             onSendmessageClickkhandler={onSendmessageClickkhandler}
//             onNewMessageChange={onNewMessageChange}
//         />
//     );
//
//
// };

// const mapStateToProps = () => {
//    // console.log(store.getState().dialogsPage)
//     return {
//         dialogsPage: store.getState().dialogsPage.dialogs
//     }
// }

const mapStateToProps = (state:any) => {
    // console.log(store.getState().dialogsPage)
    return {
        dialogsPage: state.dialogsPage.messages,
        newMessageText:state.dialogsPage.newMessageText
    }
}


const mapDispatchToProps = (dispatch:any) => {
    return {
        onSendmessageClickkhandler: () => {
            dispatch.dispatch(sendMessageAC())
        },
        onNewMessageChange: (newMessage: string) => {
            dispatch.dispatch(updateNewMessageBodyCreatorAC(newMessage))
        }
    }
}


let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
console.log(DialogsContainer)
export default DialogsContainer