import {rerenderEntireTree} from "../render";


export type  PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type DialogsType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number,
    message: string
}
export type profilePageType = {
    posts: PostType[]
    newPostText: string
}
export type messagesPageType = {
    messages: MessageType[]
    dialogs: DialogsType[]
}
export type StateType = {
    profilePage: profilePageType
    messagesPage: messagesPageType
}

let state: StateType = {
    profilePage: {
        posts: [
            {
                id: 1,
                message: 'Hi, how are you',
                likesCount: 0
            },
            {
                id: 2,
                message: 'I`ts my first post',
                likesCount: 13
            },
        ],
        newPostText: 'it-Kamasutra'
    },
    messagesPage: {
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
    }

}

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=''
    rerenderEntireTree(state)
}

export const updateNewPostText=(newText:string)=>{
      state.profilePage.newPostText=newText
    rerenderEntireTree(state)
}
// @ts-ignore
Window.state=state

export default state

// let state:StateType={
//     posts:[
//         {
//             id: 1,
//             message: 'Hi, how are you',
//             likesCount: 0
//         },
//         {
//             id: 2,
//             message: 'I`ts my first post',
//             likesCount: 13
//         },
//     ],
//     dialogs:  [
//         {
//             id: 1,
//             name: 'Igor'
//         },
//         {
//             id: 2,
//             name: 'Olga'
//         },
//         {
//             id: 3,
//             name: 'Sasha'
//         },
//     ],
//     messages: [
//         {
//             id: 1,
//             message: 'Hi'
//         },
//         {
//             id: 2,
//             message: 'How are you?'
//         },
//         {
//             id: 3,
//             message: 'Hellow'
//         },
//     ]
// }