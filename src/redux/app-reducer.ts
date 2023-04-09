import {Dispatch} from "redux";
import {setUserProfileThunkCreator} from "./auth-reducer";
import {useAppDispatch} from "../hooks/hook";

export type InitialStateType = {
    initialized: boolean,
}

let initialState: InitialStateType = {
    initialized: false,
}

export const AppReducer = (state = initialState, action: AppReducerActionType) => {
    switch (action.type) {
        case "SET_INITIALIZED": {
            return {...state, initialized: action.payload.isInitialized}
        }
        default:
            return state
    }
}

type AppReducerActionType = setInitializedACType
type setInitializedACType = ReturnType<typeof setInitializedAC>
export const setInitializedAC = (isInitialized: boolean) => {
    return {
        type: "SET_INITIALIZED",
        payload: {
            isInitialized
        }
    } as const
}

export const setInitializedTC = () => (dispatch: Dispatch) => {
    // @ts-ignore
    let promise = dispatch(setUserProfileThunkCreator())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitializedAC(true))
        })
}