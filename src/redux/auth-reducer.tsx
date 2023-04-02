import {Dispatch} from "redux";
import {authAPI, usersApi} from "../api/api";
import {setUserProfile} from "./profile-reducer";
import {useAppDispatch} from "../hooks/hook";

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    errorMessage:null
}

export type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    errorMessage:string | null,
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
        }else {
            console.log(result.data.messages[0])
            let data = {userId: null, login: null, email: null, isAuth: false,errorMessage:result.data.messages[0]}
            dispatch(setUserData(data, false))
        }
    } catch (e) {
        console.log(e)
    }
}

export const logOutTC = () => async (dispatch: Dispatch) => {
    try {
        let result = await authAPI.logOut()
        if (result.data.resultCode === 0) {
            let data = {userId: null, login: null, email: null, isAuth: false,errorMessage:null}
            dispatch(setUserData(data, false))
        }
    } catch (e) {
        console.log(e)
    }
}

//--------------------------------------------------------------
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
//             return {...state, ...action.payload.data, isAuth: action.payload.isAuth}
//         }
//         default:
//             return state
//     }
// }
//
// type AuthReducerActionType = setUserDataType
//
// type setUserDataType = ReturnType<typeof setUserData>
// export const setUserData = (data: InitialStateType, isAuth: boolean) => {
//     console.log(data)
//     return {
//         type: "SET_USER_DATA",
//         payload: {data, isAuth}
//     } as const
// }
//
// export const setUserProfileThunkCreator = () => (dispatch: Dispatch) => {
//     authAPI.authMe()
//         .then((responce) => {
//                 if (responce.resultCode === 0) {
//                     console.log(responce.data)
//                     dispatch(setUserData(responce.data, true))
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
//         }else {
//             console.log(result.data.messages[0])
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
//             let data = {userId: null, login: null, email: null, isAuth: false}
//             dispatch(setUserData(data, false))
//         }
//     } catch (e) {
//         console.log(e)
//     }
// }