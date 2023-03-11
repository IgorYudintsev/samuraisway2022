import {Dispatch} from "redux";
import {authAPI, usersApi} from "../api/api";
import {setUserProfile} from "./profile-reducer";

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
            return {...state, ...action.data, isAuth: true}
        }
        default:
            return state
    }
}

type AuthReducerActionType = setUserDataType

type setUserDataType = ReturnType<typeof setUserData>
export const setUserData = (data: InitialStateType) => {
    return {
        type: "SET_USER_DATA",
        data: data
    } as const
}

export const setUserProfileThunkCreator = () => (dispatch: Dispatch) => {
    authAPI.authMe()
        .then((responce) => {
                if (responce.resultCode === 0) {
                    dispatch(setUserData(responce.data))
                }
            }
        )
}