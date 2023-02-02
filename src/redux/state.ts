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

export type StoreType = {
    _state: StateType,
    getState: () => StateType,
    _callSubscriber: (state: StateType) => void,
    addPost: () => void,
    updateNewPostText: (newText: string) => void
    subscribe: (observer: Function) => void
}
let store = {
    _state: {
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
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: StateType) {
        console.log('state was rerendered')
    },
    addPost() {
        let newPost = {
            id: 3,
            //message: newText,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(store._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(store._state)
    },
    subscribe(observer: Function) {
        // @ts-ignore
        this._callSubscriber = observer
    }
}

// @ts-ignore
Window.store = store

export default store

//---------------------------------------------------------------------------

// export type  PostType = {
//     id: number,
//     message: string,
//     likesCount: number
// }
// export type DialogsType = {
//     id: number,
//     name: string
// }
// export type MessageType = {
//     id: number,
//     message: string
// }
// export type profilePageType = {
//     posts: PostType[]
//     newPostText: string
// }
// export type messagesPageType = {
//     messages: MessageType[]
//     dialogs: DialogsType[]
// }
// export type StateType = {
//     profilePage: profilePageType
//     messagesPage: messagesPageType
// }
//
//
// let rerenderEntireTree = (state: StateType) => {
//     console.log('state was rerendered')
// }
//
// let state: StateType = {
//     profilePage: {
//         posts: [
//             {
//                 id: 1,
//                 message: 'Hi, how are you',
//                 likesCount: 0
//             },
//             {
//                 id: 2,
//                 message: 'I`ts my first post',
//                 likesCount: 13
//             },
//         ],
//         newPostText: 'it-Kamasutra'
//     },
//     messagesPage: {
//         messages: [
//             {
//                 id: 1,
//                 message: 'Hi'
//             },
//             {
//                 id: 2,
//                 message: 'How are you?'
//             },
//             {
//                 id: 3,
//                 message: 'Hellow'
//             },
//         ],
//         dialogs: [
//             {
//                 id: 1,
//                 name: 'Igor'
//             },
//             {
//                 id: 2,
//                 name: 'Olga'
//             },
//             {
//                 id: 3,
//                 name: 'Sasha'
//             },
//         ],
//     }
// }
// export const addPost = () => {
//     let newPost = {
//         id: 3,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     }
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = ''
//     rerenderEntireTree(state)
// }
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree(state)
//
// }
//
// export const suscribe = (observer: Function) => {
//     // @ts-ignore
//     rerenderEntireTree = observer
// }
//
//
// // @ts-ignore
// Window.state = state
//
// export default state
//
