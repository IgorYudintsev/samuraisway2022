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
    status: string | null
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
    status: ''
}

export const ProfileReducer = (state = initialState, action: mainType) => {
    switch (action.type) {
        case 'PROFILE/ADD_POST': {
            let newPost = {
                id: 3,
                message: action.message,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        }
        case 'PROFILE/UPDATE_NEWPOST': {
            return {...state, newPostText: action.newText}
        }
        case "PROFILE/SET_USER_POROFILE": {
            return {...state, profile: action.profile}
        }
        case "PROFILE/SET_STATUS_PROFILE": {
            return {...state, status: action.responce}
        }
        default:
            return state
    }


}

type mainType = addPostACType | updatePostsACType | setUserProfileType | setStatusProfileType | updateProfileStatusType

type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (message: string) => {
    return {
        type: 'PROFILE/ADD_POST',
        message
    } as const
}

type updatePostsACType = ReturnType<typeof updatePostsAC>
export const updatePostsAC = (text: string) => {
    return {
        type: 'PROFILE/UPDATE_NEWPOST',
        newText: text
    } as const
}

type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: any) => {
    return {
        type: "PROFILE/SET_USER_POROFILE",
        profile
    } as const
}

export const setUserProfileThunkCreator = (getItemResult: number) => async (dispatch: Dispatch) => {
    try {
        let res = await usersApi.getProfile(getItemResult)
        dispatch(setUserProfile(res))
    } catch (e) {
        console.log(e)
    }
}


type setStatusProfileType = ReturnType<typeof setStatusProfile>
export const setStatusProfile = (responce: string) => {
    return {
        type: "PROFILE/SET_STATUS_PROFILE",
        responce
    } as const
}


export const getUserProfileStatusThunkCreator = (getItemResult: number) => async (dispatch: Dispatch) => {
    try {
        let res=await  profileApi.getStatus(getItemResult)
        dispatch(setStatusProfile(res))
    } catch(e) {
        console.log(e)
    }
}

type updateProfileStatusType = ReturnType<typeof updateProfileStatus>
export const updateProfileStatus = (status: string) => {
    return {
        type: "PROFILE/UPDATE_STATUS_PROFILE",
        status
    } as const
}

export const updateProfileStatusThunkCreator=(status: string)=>async(dispatch: Dispatch)=>{
    try{
        let res= await profileApi.updateStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(setStatusProfile(status))
        }
    }catch(e){
        console.log(e)
    }

}

//-----------------------------------------------------------

// import {PostType} from "./store";
// import {Dispatch} from "redux";
// import {profileApi, usersApi} from "../api/api";
//
// export type UserProfileType = null | {
//     aboutMe: string,
//     contacts: {
//         facebook: string,
//         website: null | string,
//         vk: string,
//         twitter: string,
//         instagram: string,
//         youtube: null | string,
//         github: string,
//         mainLink: null | string,
//     },
//     lookingForAJob: boolean,
//     lookingForAJobDescription: string,
//     fullName: string,
//     userId: number,
//     photos: {
//         small: string,
//         large: string,
//     }
// }
//
// export type profilePageType = {
//     posts: PostType[]
//     newPostText: string
//     profile: UserProfileType | null
//     status:string|null
// }
// let initialState: profilePageType = {
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
//     newPostText: 'it-Kamasutra',
//     profile: null,
//     status:''
// }
//
// export const ProfileReducer = (state = initialState, action: mainType) => {
//     switch (action.type) {
//         case 'PROFILE/ADD_POST': {
//             let newPost = {
//                 id: 3,
//                 message: action.message,
//                 likesCount: 0
//             }
//             return {...state, posts: [...state.posts, newPost], newPostText: ''}
//         }
//         case 'PROFILE/UPDATE_NEWPOST': {
//             return {...state, newPostText: action.newText}
//         }
//         case "PROFILE/SET_USER_POROFILE": {
//             return {...state, profile: action.profile}
//         }
//         case "PROFILE/SET_STATUS_PROFILE":{
//             return {...state,status:action.responce}
//         }
//         default:
//             return state
//     }
//
//
// }
//
// type mainType = addPostACType | updatePostsACType | setUserProfileType |setStatusProfileType | updateProfileStatusType
//
// type addPostACType = ReturnType<typeof addPostAC>
// export const addPostAC = (message:string) => {
//     return {
//         type: 'PROFILE/ADD_POST',
//         message
//     } as const
// }
//
// type updatePostsACType = ReturnType<typeof updatePostsAC>
// export const updatePostsAC = (text: string) => {
//     return {
//         type: 'PROFILE/UPDATE_NEWPOST',
//         newText: text
//     } as const
// }
//
// type setUserProfileType = ReturnType<typeof setUserProfile>
// export const setUserProfile = (profile: any) => {
//     return {
//         type: "PROFILE/SET_USER_POROFILE",
//         profile
//     } as const
// }
//
//
// export const setUserProfileThunkCreator = (getItemResult: number) => (dispatch: Dispatch) => {
//     usersApi.getProfile(getItemResult)
//         .then((responce) => {
//                 dispatch(setUserProfile(responce))
//             }
//         )
// }
//
//
// type setStatusProfileType=ReturnType<typeof setStatusProfile>
// export const setStatusProfile=(responce:string)=>{
//     return{
//         type:"PROFILE/SET_STATUS_PROFILE",
//         responce
//     }as const
// }
//
// export const getUserProfileStatusThunkCreator=(getItemResult: number)=>(dispatch: Dispatch) => {
//     profileApi.getStatus(getItemResult)
//         .then((responce)=>{
//             console.log(responce)
//             dispatch(setStatusProfile(responce))
//         })
// }
//
//
// type updateProfileStatusType=ReturnType<typeof updateProfileStatus>
// export const updateProfileStatus=(status:string)=>{
//     return{
//         type:"PROFILE/UPDATE_STATUS_PROFILE",
//         status
//     }as const
// }
//
// export const updateProfileStatusThunkCreator = (status: string) => (dispatch: Dispatch) => {
//     profileApi.updateStatus(status)
//         .then(response => {
//             console.log(response)
//             if (response.data.resultCode === 0) {
//                 dispatch(setStatusProfile(status))
//             }
//         })
// }

//-----------------------------------------------------------
