import {InitialStateType} from "./users-reducer";
import {reducersType} from "./redux-store";

export const getUsers=(state:reducersType)=>{
    return state.usersPage.users
}

export const getPageSize=(state:reducersType)=>{
    return state.usersPage.pageSize
}

export const getTotalUsersCount=(state:reducersType)=>{
    return state.usersPage.totalUsersCount
}
export const getCurrentPage=(state:reducersType)=>{
    return state.usersPage.currentPage
}

export const getIsFetching=(state:reducersType)=>{
    return state.usersPage.isFetching
}

export const getFollowingInProgresValue=(state:reducersType)=>{
    return state.usersPage.followingInProgres
}

// usersPage: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgresValue: state.usersPage.followingInProgres