import {combineReducers, legacy_createStore as createStore} from "redux";
import {DialogsReducer} from "./dialogs-reducer";
import {ProfileReducer} from "./profile-reducer";
import {InitialStateType, UsersReducer} from "./users-reducer";
import {AuthReducer} from "./auth-reducer";

let reducers=combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer,
    usersPage:UsersReducer,
    auth:AuthReducer
})
export type reducersType=ReturnType<typeof reducers>
export type storeType=typeof store

export let store=createStore(reducers)

// @ts-ignore
window.store=store