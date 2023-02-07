import {combineReducers, legacy_createStore as createStore} from "redux";
import {DialogsReducer} from "./dialogs-reducer";
import {ProfileReducer} from "./profile-reducer";

let reducers=combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer
})
export type reducersType=ReturnType<typeof reducers>
export type storeType=typeof store

export let store=createStore(reducers)