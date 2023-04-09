import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {DialogsReducer} from "./dialogs-reducer";
import {ProfileReducer} from "./profile-reducer";
import {InitialStateType, UsersReducer} from "./users-reducer";
import {AuthReducer} from "./auth-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppReducer} from "./app-reducer";

let reducers=combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer,
    usersPage:UsersReducer,
    auth:AuthReducer,
    app: AppReducer
})
export type reducersType=ReturnType<typeof reducers>
export type storeType=typeof store

export let store=createStore(reducers,applyMiddleware(thunk))
export type AppDispatch = ThunkDispatch<RootState, unknown,AnyAction>
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
    >

// @ts-ignore
window.store=store