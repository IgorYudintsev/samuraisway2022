import {PostType} from "./store";
import {Dispatch} from "redux";
import {profileApi, usersApi} from "../api/api";

export type UserProfileType = null | {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null | string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null | string,
        github: string,
        mainLink: null | string,
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string,
    }
}

export type profilePageType = {
    posts: PostType[]
    newPostText: string
    profile: UserProfileType | null
    status:string|null
}
let initialState: profilePageType = {
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
    newPostText: 'it-Kamasutra',
    profile: null,
    status:''
}

export const ProfileReducer = (state = initialState, action: mainType) => {
    switch (action.type) {
        case 'ADD_POST': {
            let newPost = {
                id: 3,
                message: action.message,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        }
        case 'UPDATE_NEWPOST': {
            return {...state, newPostText: action.newText}
        }
        case "SET_USER_POROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET_STATUS_PROFILE":{
            return {...state,status:action.responce}
        }
        default:
            return state
    }


}

type mainType = addPostACType | updatePostsACType | setUserProfileType |setStatusProfileType | updateProfileStatusType

type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (message:string) => {
    return {
        type: 'ADD_POST',
        message
    } as const
}

type updatePostsACType = ReturnType<typeof updatePostsAC>
export const updatePostsAC = (text: string) => {
    return {
        type: 'UPDATE_NEWPOST',
        newText: text
    } as const
}

type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: any) => {
    return {
        type: "SET_USER_POROFILE",
        profile
    } as const
}


export const setUserProfileThunkCreator = (getItemResult: number) => (dispatch: Dispatch) => {
     usersApi.getProfile(getItemResult)
        .then((responce) => {
                dispatch(setUserProfile(responce))
            }
        )
}


type setStatusProfileType=ReturnType<typeof setStatusProfile>
export const setStatusProfile=(responce:string)=>{
    return{
        type:"SET_STATUS_PROFILE",
        responce
    }as const
}

export const getUserProfileStatusThunkCreator=(getItemResult: number)=>(dispatch: Dispatch) => {
    profileApi.getStatus(getItemResult)
        .then((responce)=>{
            console.log(responce)
          dispatch(setStatusProfile(responce))
        })
}


type updateProfileStatusType=ReturnType<typeof updateProfileStatus>
export const updateProfileStatus=(status:string)=>{
    return{
        type:"UPDATE_STATUS_PROFILE",
        status
    }as const
}

export const updateProfileStatusThunkCreator = (status: string) => (dispatch: Dispatch) => {
    profileApi.updateStatus(status)
        .then(response => {
            console.log(response)
            if (response.data.resultCode === 0) {
                dispatch(setStatusProfile(status))
            }
        })
}

//-----------------------------------------------------------

// import {PostType} from "./store";
//
// const ADD_POST = 'ADD-POST'
// const UPDATE_NEWPOST = 'UPDATE-NEWPOST'
//
// export type profilePageType = {
//     posts: PostType[]
//     newPostText: string
// }
// let initialState:profilePageType= {
//     posts: [
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
//     newPostText: 'it-Kamasutra'
// }
//
// export const ProfileReducer = (state=initialState, action: any) => {
//     switch (action.type) {
//         case ADD_POST: {
//             let newPost = {
//                 id: 3,
//                 message: state.newPostText,
//                 likesCount: 0
//             }
//             state.posts.push(newPost)
//             state.newPostText = ''
//             return state
//         }
//         case UPDATE_NEWPOST: {
//             state.newPostText = action.newText
//             return state
//         }
//         default:
//             return state
//     }
//
//
// }
//
// export const addPostAC = () => {
//     return {
//         type: ADD_POST
//     }
// }
// export const updatePostsAC = (text: string) => {
//     return {
//         type: UPDATE_NEWPOST,
//         newText: text
//     }
// }