import React from 'react';
import {Dialogs} from "./Dialogs";
import {sendMessageAC, updateNewMessageBodyCreatorAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {store} from "../../redux/redux-store";
import {StateType} from "../../redux/store";

// type StateType = {
//     // state: messagesPageType
//     // dispatch: (action: any) => void
//
// }

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