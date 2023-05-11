import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {AppDispatch} from "./redux-store";

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    errorMessage: null,
    captchaURL: null
}

export type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    errorMessage: string | null,
    captchaURL: string | null
}

export const AuthReducer = (state = initialState, action: AuthReducerActionType) => {
    switch (action.type) {
        case "AUTH/SET_USER_DATA": {
            return {...state, ...action.payload.data, isAuth: action.payload.isAuth}
        }
        case "AUTH/SECURITY-CAPTCHA": {
            return {...state, captchaURL: action.payload.captcha}
        }
        default:
            return state
    }
}

type AuthReducerActionType = setUserDataType | securityAPIACType

type setUserDataType = ReturnType<typeof setUserData>
export const setUserData = (data: InitialStateType, isAuth: boolean) => {
    return {
        type: "AUTH/SET_USER_DATA",
        payload: {data, isAuth}
    } as const
}

export const setUserProfileThunkCreator = () => (dispatch: Dispatch) => {
    return authAPI.authMe()
        .then((responce) => {
                if (responce.resultCode === 0) {
                    dispatch(setUserData(responce.data, true))
                }
            }
        )
}

export const loginTC = (email: string, password: string, rememberMe: boolean,captcha:string|null) => async (dispatch: AppDispatch) => {
    try {
        let result = await authAPI.loginMe(email, password, rememberMe,captcha)
        if (result.data.resultCode === 0) {

            dispatch(setUserProfileThunkCreator())
        }  else {
        if (result.data.resultCode === 10) {
                dispatch(securityAPIThunkCreator())
            }
            let data = {
                captchaURL: null,
                userId: null,
                login: null,
                email: null,
                isAuth: false,
                errorMessage: result.data.messages[0]
            }
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
            let data = {captchaURL: null, userId: null, login: null, email: null, isAuth: false, errorMessage: null}
            dispatch(setUserData(data, false))
        }
    } catch (e) {
        console.log(e)
    }
}

type securityAPIACType = ReturnType<typeof securityAPIAC>
const securityAPIAC = (captcha: string) => {
    return {
        type: "AUTH/SECURITY-CAPTCHA",
        payload: {
            captcha
        }
    } as const
}


export const securityAPIThunkCreator = () => async (dispatch: Dispatch) => {
    try {
        let res = await securityAPI.getCaptcha()
        dispatch(securityAPIAC(res.url))
    } catch {

    }
}