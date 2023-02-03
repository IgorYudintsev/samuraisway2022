import {profilePageType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEWPOST = 'UPDATE-NEWPOST'

export const ProfileReducer = (state: profilePageType, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        }
        case UPDATE_NEWPOST: {
             state.newPostText = action.newText
            return state
        }
        default:
            return state
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