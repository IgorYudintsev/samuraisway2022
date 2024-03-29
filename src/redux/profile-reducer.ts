import {PostType} from "./store";
import {Dispatch} from "redux";
import {profileApi, securityAPI, usersApi} from "../api/api";
import {AppDispatch, RootState} from "./redux-store";

export type UserProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string,
    }
}

export type ContactsType = {
    [key: string]: string | null
    // facebook: string
    // website: string
    // vk: string
    // twitter: string
    // instagram: string
    // youtube: string
    // github: string
    // mainLink: string
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
        case "PROFILE/UPDATE_PHOTOS": {
            console.log('photos')
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state
    }


}

type mainType =
    addPostACType
    | updatePostsACType
    | setUserProfileType
    | setStatusProfileType
    | updateProfileStatusType
    | setPhotoType

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
        let res = await profileApi.getStatus(getItemResult)
        dispatch(setStatusProfile(res))
    } catch (e) {
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

export const updateProfileStatusThunkCreator = (status: string) => async (dispatch: Dispatch) => {
    try {
        let res = await profileApi.updateStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(setStatusProfile(status))
        }
    } catch (e) {
        console.log(e)
    }
}

type setPhotoType = ReturnType<typeof setPhoto>
export const setPhoto = (photos: { photos: { small: string, large: string } }) => {
    return {
        type: "PROFILE/UPDATE_PHOTOS",
        photos
    } as const
}

export const savePhotoThunkCreator = (file: string) => async (dispatch: Dispatch) => {
    try {
        let res = await profileApi.savePhoto(file)
        if (res.data.resultCode === 0) {
            dispatch(setPhoto(res.data.data.photos))
        }
    } catch {

    }
}

export const saveProfileThunkCreator = (data: any) => async (dispatch: AppDispatch, getState: () => RootState) => {
    let userID: null | number = getState().auth!.userId
        try {
        let res = await profileApi.saveProfile(data)
        if (res.data.resultCode === 0) {
            dispatch(setUserProfileThunkCreator(11593))
                 }
    } catch {

    }
}

