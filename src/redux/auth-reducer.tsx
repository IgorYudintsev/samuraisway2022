// import {Action, Dispatch} from "redux";
// import {authAPI, usersApi} from "../api/api";
// import {setUserProfile} from "./profile-reducer";
// import {useAppDispatch} from "../hooks/hook";
// import {ThunkAction} from "redux-thunk";
// import {RootState} from "./redux-store";
//
// type UserProfileThunkType = ThunkAction<Promise<void>, RootState, unknown, Action<string>>;
// let initialState: InitialStateType = {
//     userId: null,
//     email: null,
//     login: null,
//     isAuth: false
// }
//
// export type InitialStateType = {
//     userId: number | null,
//     email: string | null,
//     login: string | null,
//     isAuth: boolean
// }
//
// export const AuthReducer = (state = initialState, action: AuthReducerActionType) => {
//     switch (action.type) {
//         case "SET_USER_DATA": {
//             return {...state, ...action.payload}
//         }
//         default:
//             return state
//     }
// }
//
// type AuthReducerActionType = setUserDataType
//
// type setUserDataType = ReturnType<typeof setUserData>
// export const setUserData = (userId: string, login: string, email: string, isAuth: boolean) => {
//     return {
//         type: "SET_USER_DATA",
//         payload: {userId, login, email, isAuth}
//     } as const
// }
//
// export const setUserProfileThunkCreator = () => (dispatch: Dispatch) => {
//     authAPI.authMe()
//         .then((responce) => {
//                 if (responce.resultCode === 0) {
//                     console.log(responce.data)
//                     let {id, login, email} = responce.data
//                     dispatch(setUserData(id, login, email, true))
//                 }
//             }
//         )
// }
//
// export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
//     try {
//         let result = await authAPI.loginMe(email, password, rememberMe)
//         if (result.data.resultCode === 0) {
//             // @ts-ignore
//             dispatch(setUserProfileThunkCreator())
//         }
//     } catch (e) {
//         console.log(e)
//     }
// }
//
// export const logOutTC = () => async (dispatch: Dispatch) => {
//     try {
//         let result = await authAPI.logOut()
//         if (result.data.resultCode === 0) {
//             // @ts-ignore
//             dispatch(setUserData(null, null, null, false))
//         }
//     } catch (e) {
//         console.log(e)
//     }
// }

//------------------------------------------------------------------------------------------------

// import {Action, Dispatch} from "redux";
// import {authAPI, usersApi} from "../api/api";
// import {setUserProfile} from "./profile-reducer";
// import {useAppDispatch} from "../hooks/hook";
// import {ThunkAction} from "redux-thunk";
// import {RootState} from "./redux-store";
//
// type UserProfileThunkType = ThunkAction<Promise<void>, RootState, unknown, Action<string>>;
// let initialState: InitialStateType = {
//     userId: null,
//     email: null,
//     login: null,
//     isAuth: false
// }
//
// export type InitialStateType = {
//     userId: number | null,
//     email: string | null,
//     login: string | null,
//     isAuth: boolean
// }
//
// export const AuthReducer = (state = initialState, action: AuthReducerActionType) => {
//     switch (action.type) {
//         case "SET_USER_DATA": {
//             return {...state, ...action.payload}
//         }
//         default:
//             return state
//     }
// }
//
// type AuthReducerActionType = setUserDataType
//
// type setUserDataType = ReturnType<typeof setUserData>
// export const setUserData = (userId: string, login: string, email: string, isAuth: boolean) => {
//     return {
//         type: "SET_USER_DATA",
//         payload: {userId, login, email, isAuth}
//     } as const
// }
//
// export const setUserProfileThunkCreator = () => (dispatch: Dispatch) => {
//     authAPI.authMe()
//         .then((responce) => {
//                 if (responce.resultCode === 0) {
//                     console.log(responce.data)
//                     let {id, login, email} = responce.data
//                     dispatch(setUserData(id, login, email, true))
//                 }
//             }
//         )
// }
//
// export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
//     try {
//         let result = await authAPI.loginMe(email, password, rememberMe)
//         if (result.data.resultCode === 0) {
//             // @ts-ignore
//             dispatch(setUserProfileThunkCreator())
//         }
//     } catch (e) {
//         console.log(e)
//     }
// }
//
// export const logOutTC = () => async (dispatch: Dispatch) => {
//     try {
//         let result = await authAPI.logOut()
//         if (result.data.resultCode === 0) {
//             // @ts-ignore
//             dispatch(setUserData(null, null, null, false))
//         }
//     } catch (e) {
//         console.log(e)
//     }
// }

//------------------------------------------------------------------------------------------------

// import {Dispatch} from "redux";
// import {authAPI, usersApi} from "../api/api";
// import {setUserProfile} from "./profile-reducer";
// import {useAppDispatch} from "../hooks/hook";
//
// let initialState: InitialStateType = {
//     userId: null,
//     email: null,
//     login: null,
//     isAuth: false
// }
//
// export type InitialStateType = {
//     userId: number | null,
//     email: string | null,
//     login: string | null,
//     isAuth: boolean,
// }
//
// export const AuthReducer = (state = initialState, action: AuthReducerActionType) => {
//     switch (action.type) {
//         case "SET_USER_DATA": {
//             return {...state, ...action.payload, isAuth: true}
//         }
//         default:
//             return state
//     }
// }
//
// type AuthReducerActionType = setUserDataType
//
// type setUserDataType = ReturnType<typeof setUserData>
// export const setUserData = (data: InitialStateType) => {
//     return {
//         type: "SET_USER_DATA",
//         payload: data
//     } as const
// }
//
// export const setUserProfileThunkCreator = () => (dispatch: Dispatch) => {
//     authAPI.authMe()
//         .then((responce) => {
//                 if (responce.resultCode === 0) {
//                     console.log(responce.data)
//                     dispatch(setUserData(responce.data))
//                 }
//             }
//         )
// }
//
// export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
//     try {
//         let result = await authAPI.loginMe(email, password, rememberMe)
//         if (result.data.resultCode === 0) {
//             // @ts-ignore
//             dispatch(setUserProfileThunkCreator())
//         }
//     } catch (e) {
//         console.log(e)
//     }
// }
//
// export const logOutTC=()=>async(dispatch:Dispatch)=>{
//     try{
//         let result=await authAPI.logOut()
//         if(result.data.resultCode===0){
//             // @ts-ignore
//             //dispatch(setUserProfileThunkCreator())
//         }
//     }catch(e){
//         console.log(e)
//     }
// }

//-----------------------------------------------------------------------------------------------


import {Dispatch} from "redux";
import {authAPI, usersApi} from "../api/api";
import {setUserProfile} from "./profile-reducer";
import {useAppDispatch} from "../hooks/hook";

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

export const AuthReducer = (state = initialState, action: AuthReducerActionType) => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.payload.data, isAuth: action.payload.isAuth}
        }
        default:
            return state
    }
}

type AuthReducerActionType = setUserDataType

type setUserDataType = ReturnType<typeof setUserData>
export const setUserData = (data: InitialStateType, isAuth: boolean) => {
    console.log(data)
    return {
        type: "SET_USER_DATA",
        payload: {data, isAuth}
    } as const
}

export const setUserProfileThunkCreator = () => (dispatch: Dispatch) => {
    authAPI.authMe()
        .then((responce) => {
                if (responce.resultCode === 0) {
                    console.log(responce.data)
                    dispatch(setUserData(responce.data, true))
                }
            }
        )
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
    try {
        let result = await authAPI.loginMe(email, password, rememberMe)
        if (result.data.resultCode === 0) {
            // @ts-ignore
            dispatch(setUserProfileThunkCreator())
        }
    } catch (e) {
        console.log(e)
    }
}

export const logOutTC = () => async (dispatch: Dispatch) => {
    console.log('hhhhhhhhhhhhhhhhhh')
    try {
        let result = await authAPI.logOut()
        if (result.data.resultCode === 0) {
            let data = {userId: null, login: null, email: null, isAuth: false}
            dispatch(setUserData(data, false))
        }
    } catch (e) {
        console.log(e)
    }
}