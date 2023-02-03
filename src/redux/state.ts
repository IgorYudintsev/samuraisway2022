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
    newMessageText: string
}
export type StateType = {
    profilePage: profilePageType
    dialogsPage: messagesPageType

}

export type StoreType = {
    _state: StateType,
    getState: () => StateType,
    _callSubscriber: (state: StateType) => void,
    dispatch: (action: any) => void,
    subscribe: (observer: Function) => void
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEWPOST = 'UPDATE-NEWPOST'
const SEND_MESSAGE = 'ADD-NEWPOSTTEXT'
const UPDATE_NEWPOSTTEXT = 'UPDATE-NEWPOSTTEXT'

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
        dialogsPage: {
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
            newMessageText: ''
        }
    },
    _callSubscriber(state: StateType) {
        console.log('state was rerendered')
    },
    getState() {
        return this._state
    },
    subscribe(observer: Function) {
        // @ts-ignore
        this._callSubscriber = observer
    },
    dispatch(action: any) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                //message: newText,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(store._state)
        }
        else if (action.type === UPDATE_NEWPOST) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(store._state)
        }
        else if (action.type === SEND_MESSAGE) {
            let newPostText = {
                id: 1,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newPostText)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(store._state)
        }
        else if (action.type === UPDATE_NEWPOSTTEXT) {
            console.log('njnjknk')
            this._state.dialogsPage.newMessageText = action.newMessageText
            this._callSubscriber(store._state)
        }
    }


}

export const addPostAC = () => {
    return {
        type: ADD_POST
    }
}
export const updatePostsAC = (text: string) => {
    return {
        type: UPDATE_NEWPOST,
        newText: text
    }
}


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

// @ts-ignore
Window.store = store

export default store
