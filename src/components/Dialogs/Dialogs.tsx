import React from 'react';
import styled from "styled-components";
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";
import {messagesPageType} from "../../redux/store";
import {SubmitHandler, useForm} from "react-hook-form";
import {CommonForm} from "../common/CommonForm";


export type StateDialogsType = {
    dialogsPage: messagesPageType
    onSendmessageClickkhandler: (message: string) => void
}

export const Dialogs = (props: StateDialogsType) => {

    const dialogs = props.dialogsPage.dialogs.map(d => {
        return (
            <DialogItem name={d.name} id={d.id} key={d.id}/>
        )
    })
    const messages = props.dialogsPage.messages.map(m => {
        return (
            <Message message={m.message} key={m.id}/>
        )
    })

    const onSubmitHandler = (message: string) => {
        props.onSendmessageClickkhandler(message)
    }


    return (
        <Wrapper>
            <Left>
                {dialogs}
            </Left>
            <Right>
                {messages}
                {/*<div><textarea*/}
                {/*    ref={newDialgElement}*/}
                {/*    placeholder={'Enter your message'}*/}
                {/*    value={newMessageBody}*/}
                {/*    onChange={onNewMessageChange}*/}
                {/*/></div>*/}
                {/*<div>*/}
                {/*    <button onClick={onSendmessageClickkhandler}>Add</button>*/}
                {/*</div>*/}

                {/*<AddMessageForm onSubmitHandler={onSubmitHandler}/>*/}

                <CommonForm onSubmitHandler={onSubmitHandler} textArea={false}/>
            </Right>
        </Wrapper>
    );
};


type Inputs = {
    message: string,
};

type AddMessageFormType = {
    onSubmitHandler: (message: string) => void
}

export const AddMessageForm = (props: AddMessageFormType) => {
    const {register, handleSubmit, reset} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        props.onSubmitHandler(data.message)
        reset()
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input placeholder={'Enter your message'} {...register("message",{required: true})} />
            </div>
            <input type="submit"/>
        </form>

    )
}


const Wrapper = styled.div`
  display: flex;
  width: 100%;

`

const Left = styled.div`
  background-color: steelblue;
  width: 50%;
`

const Right = styled.div`
  background-color: #1e3786;
  width: 50%;
`

//------------------------------------------------------------------------------

// import React, {ChangeEvent, useRef} from 'react';
// import styled from "styled-components";
// import {DialogItem} from "./DialogItem";
// import {Message} from "./Message";
// import {messagesPageType} from "../../redux/store";
// import {Navigate} from "react-router-dom";
// import {SubmitHandler, useForm} from "react-hook-form";
//
//
// export type StateDialogsType = {
//     dialogsPage: messagesPageType
//     //isAuth?: boolean
//     onSendmessageClickkhandler: () => void
//     onNewMessageChange: (newMessage: string) => void
// }
//
// export const Dialogs = (props: StateDialogsType) => {
//
//     const newMessageBody = props.dialogsPage.newMessageText
//     const dialogs = props.dialogsPage.dialogs.map(d => {
//         return (
//             <DialogItem name={d.name} id={d.id} key={d.id}/>
//         )
//     })
//     const messages = props.dialogsPage.messages.map(m => {
//         return (
//             <Message message={m.message} key={m.id}/>
//         )
//     })
//
//
//     let newDialgElement = useRef<HTMLTextAreaElement>(null)
//
//     const onSendmessageClickkhandler = () => {
//         props.onSendmessageClickkhandler()
//     }
//
//     const onNewMessageChange = () => {
//         if (newDialgElement.current) {
//             let newText = newDialgElement.current.value
//             console.log(newText)
//             props.onNewMessageChange(newText)
//
//         }
//     }
//
//     // if(!props.isAuth){
//     //    return <Navigate to={'/login'}/>
//     // }
//
//
//     return (
//         <Wrapper>
//             <Left>
//                 {dialogs}
//             </Left>
//             <Right>
//                 {messages}
//                 <div><textarea
//                     ref={newDialgElement}
//                     placeholder={'Enter your message'}
//                     value={newMessageBody}
//                     onChange={onNewMessageChange}
//                 /></div>
//                 <div>
//                     <button onClick={onSendmessageClickkhandler}>Add</button>
//                 </div>
//             </Right>
//         </Wrapper>
//     );
// };
//
//
// type Inputs = {
//     message: string,
//
// };
//
// export const AddMessageForm = () => {
//     const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
//     const onSubmit: SubmitHandler<Inputs> = (data) =>{
//         console.log(data);
//     }
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//
//             <div>
//                 <input placeholder={'Enter your message'} {...register("message")} />
//             </div>
//             <input type="submit"/>
//         </form>
//
//     )
//
// }
//
//
// const Wrapper = styled.div`
//   display: flex;
//   width: 100%;
//
// `
//
// const Left = styled.div`
//   background-color: steelblue;
//   width: 50%;
// `
//
// const Right = styled.div`
//   background-color: #1e3786;
//   width: 50%;
// `
