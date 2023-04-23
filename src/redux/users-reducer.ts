import {usersApi} from "../api/api";
import {Dispatch} from "redux";

export type InitialStateType = {
    users: UsersType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgres: number[]
}

export type UsersType = {
    id: number,
    photoUrl: string,
    photos: { small: string, large: string }
    followed: boolean,
    name: string,
    status: string,
    location: LocationType
}
type LocationType = {
    city: string,
    counry: string
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,
    followingInProgres: []
}

export const UsersReducer = (state = initialState, action: MainUsersType) => {
    switch (action.type) {
            case "USERS/FOLLOW_UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {
                    ...el,
                    followed: action.followUnfollowSwitcher
                } : el)
            }
        }

        // case "USERS/FOLLOW": {
        //     return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        //
        // }
        // case "USERS/UN_FOLLOW": {
        //     return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        // }
        case "USERS/SET_USERS": {
            return {...state, users: action.users}
        }
        case "USERS/SET_CURRENTpAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "USERS/SET_TOTALuSERScOUNTpAGE": {
            // console.log(action.totalUsersCount)
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case "USERS/TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.onOff}
        }
        case "USERS/FOOLLOWING_IN_PROGRESS": {
            return {
                ...state, followingInProgres: action.onOff
                    ? [...state.followingInProgres, action.userID]
                    : state.followingInProgres.filter(el => el !== action.userID)
            }
        }

        default:
            return state
    }
}

type MainUsersType = FollowACType
    | UnFollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingACType
    | followingInProgresACType
    | followUnfollowACType


type followUnfollowACType = ReturnType<typeof followUnfollow>
export const followUnfollow = (userId: number, followUnfollowSwitcher: boolean) => {
    return {
        type: "USERS/FOLLOW_UNFOLLOW",
        userId,
        followUnfollowSwitcher
    } as const
}


type FollowACType = ReturnType<typeof follow>
export const follow = (userId: number) => {
    return {
        type: "USERS/FOLLOW",
        userId
    } as const
}

type UnFollowACType = ReturnType<typeof unFollow>
export const unFollow = (userId: number) => {
    return {
        type: "USERS/UN_FOLLOW",
        userId
    } as const
}

type setUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: UsersType[]) => {
    return {
        type: "USERS/SET_USERS",
        users
    } as const
}

type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'USERS/SET_CURRENTpAGE',
        currentPage
    } as const
}

type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'USERS/SET_TOTALuSERScOUNTpAGE',
        totalUsersCount
    } as const
}

type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (onOff: boolean) => {
    return {
        type: 'USERS/TOGGLE_IS_FETCHING',
        onOff
    } as const
}

type followingInProgresACType = ReturnType<typeof followingInProgres>
export const followingInProgres = (onOff: boolean, userID: number) => {
    return {
        type: "USERS/FOOLLOWING_IN_PROGRESS",
        onOff, userID
    } as const
}


export const getUsersThunkCreator = (pageSize: number, currentPage: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    try {
        let data = await usersApi.getUsers(pageSize, currentPage)
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(toggleIsFetching(false))
    } catch (e) {
        console.log(e)
    }
}


const foollowUnfollowFoo = async (dispatch: Dispatch, userID: number, APImethod: (userID: number) => any, followUnfollowSwitcher: boolean) => {
    let responce = await APImethod(userID)
    if (responce.resultCode === 0) {
        //dispatch(actionCreator(userID))
        dispatch(followUnfollow(userID, followUnfollowSwitcher))
    }
    dispatch(followingInProgres(false, userID))
}


export const followThunkCreator = (userID: number) => async (dispatch: Dispatch) => {
    dispatch(followingInProgres(true, userID))
    try {
        let apiMethod = usersApi.follow
        foollowUnfollowFoo(dispatch, userID, apiMethod, true)
    } catch (e) {
        console.log(e)
    }
}

export const unFollowThunkCreator = (userID: number) => async (dispatch: Dispatch) => {
    dispatch(followingInProgres(true, userID))
    try {
        let apiMethod = usersApi.unFollow
        foollowUnfollowFoo(dispatch, userID, apiMethod, false)
    } catch (e) {
        console.log(e)
    }
}

//-----------------------------------------------------------------------------

// import {usersApi} from "../api/api";
// import {Dispatch} from "redux";
//
// export type InitialStateType = {
//     users: UsersType[]
//     pageSize: number,
//     totalUsersCount: number,
//     currentPage: number,
//     isFetching: boolean,
//     followingInProgres: number[]
// }
//
// export type UsersType = {
//     id: number,
//     photoUrl: string,
//     photos: { small: string, large: string }
//     followed: boolean,
//     name: string,
//     status: string,
//     location: LocationType
// }
// type LocationType = {
//     city: string,
//     counry: string
// }
//
// let initialState: InitialStateType = {
//     users: [],
//     pageSize: 10,
//     totalUsersCount: 0,
//     currentPage: 2,
//     isFetching: true,
//     followingInProgres: []
// }
//
// export const UsersReducer = (state = initialState, action: MainUsersType) => {
//     switch (action.type) {
//         case "USERS/FOLLOW": {
//             return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
//
//         }
//         case "USERS/UN_FOLLOW": {
//             return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
//         }
//         case "USERS/SET_USERS": {
//             return {...state, users: action.users}
//         }
//         case "USERS/SET_CURRENTpAGE": {
//             return {...state, currentPage: action.currentPage}
//         }
//         case "USERS/SET_TOTALuSERScOUNTpAGE": {
//             // console.log(action.totalUsersCount)
//             return {...state, totalUsersCount: action.totalUsersCount}
//         }
//         case "USERS/TOGGLE_IS_FETCHING": {
//             return {...state, isFetching: action.onOff}
//         }
//         case "USERS/FOOLLOWING_IN_PROGRESS": {
//             return {
//                 ...state, followingInProgres: action.onOff
//                     ? [...state.followingInProgres, action.userID]
//                     : state.followingInProgres.filter(el => el !== action.userID)
//             }
//         }
//
//         default:
//             return state
//     }
// }
//
// type MainUsersType = FollowACType
//     | UnFollowACType
//     | setUsersACType
//     | setCurrentPageACType
//     | setTotalUsersCountACType
//     | toggleIsFetchingACType
//     | followingInProgresACType
//
// type FollowACType = ReturnType<typeof follow>
// export const follow = (userId: number) => {
//     return {
//         type: "USERS/FOLLOW",
//         userId
//     } as const
// }
//
// type UnFollowACType = ReturnType<typeof unFollow>
// export const unFollow = (userId: number) => {
//     return {
//         type: "USERS/UN_FOLLOW",
//         userId
//     } as const
// }
//
// type setUsersACType = ReturnType<typeof setUsers>
// export const setUsers = (users: UsersType[]) => {
//     return {
//         type: "USERS/SET_USERS",
//         users
//     } as const
// }
//
// type setCurrentPageACType = ReturnType<typeof setCurrentPage>
// export const setCurrentPage = (currentPage: number) => {
//     return {
//         type: 'USERS/SET_CURRENTpAGE',
//         currentPage
//     } as const
// }
//
// type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
// export const setTotalUsersCount = (totalUsersCount: number) => {
//     return {
//         type: 'USERS/SET_TOTALuSERScOUNTpAGE',
//         totalUsersCount
//     } as const
// }
//
// type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
// export const toggleIsFetching = (onOff: boolean) => {
//     return {
//         type: 'USERS/TOGGLE_IS_FETCHING',
//         onOff
//     } as const
// }
//
// type followingInProgresACType = ReturnType<typeof followingInProgres>
// export const followingInProgres = (onOff: boolean, userID: number) => {
//     return {
//         type: "USERS/FOOLLOWING_IN_PROGRESS",
//         onOff, userID
//     } as const
// }
//
//
// export const getUsersThunkCreator = (pageSize: number, currentPage: number) => async (dispatch: Dispatch) => {
//     dispatch(toggleIsFetching(true))
//     dispatch(setCurrentPage(currentPage))
//     try {
//         let data = await usersApi.getUsers(pageSize, currentPage)
//         dispatch(setUsers(data.items))
//         dispatch(setTotalUsersCount(data.totalCount))
//         dispatch(toggleIsFetching(false))
//     } catch (e) {
//         console.log(e)
//     }
// }
//
//
// const foollowUnfollowFoo = async (dispatch: Dispatch, userID: number, APImethod: (userID: number) => any, actionCreator: any) => {
//     let responce = await APImethod(userID)
//     if (responce.resultCode === 0) {
//         dispatch(actionCreator(userID))
//     }
//     dispatch(followingInProgres(false, userID))
// }
//
//
// export const followThunkCreator = (userID: number) => async (dispatch: Dispatch) => {
//     dispatch(followingInProgres(true, userID))
//     try {
//         let apiMethod = usersApi.follow
//         foollowUnfollowFoo(dispatch, userID, apiMethod, follow)
//     } catch (e) {
//         console.log(e)
//     }
// }
//
// export const unFollowThunkCreator = (userID: number) => async (dispatch: Dispatch) => {
//     dispatch(followingInProgres(true, userID))
//     try {
//         let apiMethod = usersApi.unFollow
//         foollowUnfollowFoo(dispatch, userID, apiMethod, unFollow)
//     } catch (e) {
//         console.log(e)
//     }
// }


//-----------------------------------------------------------------------------
// import {usersApi} from "../api/api";
// import {Dispatch} from "redux";
//
// export type InitialStateType = {
//     users: UsersType[]
//     pageSize: number,
//     totalUsersCount: number,
//     currentPage: number,
//     isFetching: boolean,
//     followingInProgres: number[]
// }
//
// export type UsersType = {
//     id: number,
//     photoUrl: string,
//     photos: { small: string, large: string }
//     followed: boolean,
//     name: string,
//     status: string,
//     location: LocationType
// }
// type LocationType = {
//     city: string,
//     counry: string
// }
//
// let initialState: InitialStateType = {
//     users: [],
//     pageSize: 10,
//     totalUsersCount: 0,
//     currentPage: 2,
//     isFetching: true,
//     followingInProgres: []
// }
//
// export const UsersReducer = (state = initialState, action: MainUsersType) => {
//     switch (action.type) {
//         case "USERS/FOLLOW": {
//             return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
//
//         }
//         case "USERS/UN_FOLLOW": {
//             return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
//         }
//         case "USERS/SET_USERS": {
//             return {...state, users: action.users}
//         }
//         case "USERS/SET_CURRENTpAGE": {
//             return {...state, currentPage: action.currentPage}
//         }
//         case "USERS/SET_TOTALuSERScOUNTpAGE": {
//             // console.log(action.totalUsersCount)
//             return {...state, totalUsersCount: action.totalUsersCount}
//         }
//         case "USERS/TOGGLE_IS_FETCHING": {
//             return {...state, isFetching: action.onOff}
//         }
//         case "USERS/FOOLLOWING_IN_PROGRESS": {
//             return {
//                 ...state, followingInProgres: action.onOff
//                     ? [...state.followingInProgres, action.userID]
//                     : state.followingInProgres.filter(el => el !== action.userID)
//             }
//         }
//
//         default:
//             return state
//     }
// }
//
// type MainUsersType = FollowACType
//     | UnFollowACType
//     | setUsersACType
//     | setCurrentPageACType
//     | setTotalUsersCountACType
//     | toggleIsFetchingACType
//     | followingInProgresACType
//
// type FollowACType = ReturnType<typeof follow>
// export const follow = (userId: number) => {
//     return {
//         type: "USERS/FOLLOW",
//         userId
//     } as const
// }
//
// type UnFollowACType = ReturnType<typeof unFollow>
// export const unFollow = (userId: number) => {
//     return {
//         type: "USERS/UN_FOLLOW",
//         userId
//     } as const
// }
//
// type setUsersACType = ReturnType<typeof setUsers>
// export const setUsers = (users: UsersType[]) => {
//     return {
//         type: "USERS/SET_USERS",
//         users
//     } as const
// }
//
// type setCurrentPageACType = ReturnType<typeof setCurrentPage>
// export const setCurrentPage = (currentPage: number) => {
//     return {
//         type: 'USERS/SET_CURRENTpAGE',
//         currentPage
//     } as const
// }
//
// type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
// export const setTotalUsersCount = (totalUsersCount: number) => {
//     return {
//         type: 'USERS/SET_TOTALuSERScOUNTpAGE',
//         totalUsersCount
//     } as const
// }
//
// type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
// export const toggleIsFetching = (onOff: boolean) => {
//     return {
//         type: 'USERS/TOGGLE_IS_FETCHING',
//         onOff
//     } as const
// }
//
// type followingInProgresACType = ReturnType<typeof followingInProgres>
// export const followingInProgres = (onOff: boolean, userID: number) => {
//     return {
//         type: "USERS/FOOLLOWING_IN_PROGRESS",
//         onOff, userID
//     } as const
// }
//
//
// export const getUsersThunkCreator = (pageSize: number, currentPage: number) => async (dispatch: Dispatch) => {
//     dispatch(toggleIsFetching(true))
//     dispatch(setCurrentPage(currentPage))
//     try {
//         let data = await usersApi.getUsers(pageSize, currentPage)
//         dispatch(setUsers(data.items))
//         dispatch(setTotalUsersCount(data.totalCount))
//         dispatch(toggleIsFetching(false))
//     } catch (e) {
//         console.log(e)
//     }
// }
//
//
// export const followThunkCreator = (userID: number) => async (dispatch: Dispatch) => {
//     dispatch(followingInProgres(true, userID))
//     try {
//         let responce = await usersApi.follow(userID)
//         if (responce.resultCode === 0) {
//             dispatch(follow(userID))
//         }
//         dispatch(followingInProgres(false, userID))
//     } catch (e) {
//         console.log(e)
//     }
// }
//
// export const unFollowThunkCreator = (userID: number) => async (dispatch: Dispatch) => {
//     dispatch(followingInProgres(true, userID))
//     try {
//         let responce = await usersApi.unFollow(userID)
//         if (responce.resultCode === 0) {
//             dispatch(unFollow(userID))
//         }
//         dispatch(followingInProgres(false, userID))
//     } catch (e) {
//         console.log(e)
//     }
// }
//-----------------------------------------------------------------------------

// import {usersApi} from "../api/api";
// import {Dispatch} from "redux";
//
// export type InitialStateType = {
//     users: UsersType[]
//     pageSize: number,
//     totalUsersCount: number,
//     currentPage: number,
//     isFetching: boolean,
//     followingInProgres: number[]
// }
//
// export type UsersType = {
//     id: number,
//     photoUrl: string,
//     photos: { small: string, large: string }
//     followed: boolean,
//     name: string,
//     status: string,
//     location: LocationType
// }
// type LocationType = {
//     city: string,
//     counry: string
// }
//
// let initialState: InitialStateType = {
//     users: [],
//     pageSize: 10,
//     totalUsersCount: 0,
//     currentPage: 2,
//     isFetching: true,
//     followingInProgres: []
// }
//
// export const UsersReducer = (state = initialState, action: MainUsersType) => {
//     switch (action.type) {
//         case "USERS/FOLLOW": {
//             return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
//
//         }
//         case "USERS/UN_FOLLOW": {
//             return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
//         }
//         case "USERS/SET_USERS": {
//             return {...state, users: action.users}
//         }
//         case "USERS/SET_CURRENTpAGE": {
//             return {...state, currentPage: action.currentPage}
//         }
//         case "USERS/SET_TOTALuSERScOUNTpAGE": {
//             // console.log(action.totalUsersCount)
//             return {...state, totalUsersCount: action.totalUsersCount}
//         }
//         case "USERS/TOGGLE_IS_FETCHING": {
//             return {...state, isFetching: action.onOff}
//         }
//         case "USERS/FOOLLOWING_IN_PROGRESS": {
//             return {
//                 ...state, followingInProgres: action.onOff
//                     ? [...state.followingInProgres, action.userID]
//                     : state.followingInProgres.filter(el => el !== action.userID)
//             }
//         }
//
//         default:
//             return state
//     }
// }
//
// type MainUsersType = FollowACType
//     | UnFollowACType
//     | setUsersACType
//     | setCurrentPageACType
//     | setTotalUsersCountACType
//     | toggleIsFetchingACType
//     | followingInProgresACType
//
// type FollowACType = ReturnType<typeof follow>
// export const follow = (userId: number) => {
//     return {
//         type: "USERS/FOLLOW",
//         userId
//     } as const
// }
//
// type UnFollowACType = ReturnType<typeof unFollow>
// export const unFollow = (userId: number) => {
//     return {
//         type: "USERS/UN_FOLLOW",
//         userId
//     } as const
// }
//
// type setUsersACType = ReturnType<typeof setUsers>
// export const setUsers = (users: UsersType[]) => {
//     return {
//         type: "USERS/SET_USERS",
//         users
//     } as const
// }
//
// type setCurrentPageACType = ReturnType<typeof setCurrentPage>
// export const setCurrentPage = (currentPage: number) => {
//     return {
//         type: 'USERS/SET_CURRENTpAGE',
//         currentPage
//     } as const
// }
//
// type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
// export const setTotalUsersCount = (totalUsersCount: number) => {
//     return {
//         type: 'USERS/SET_TOTALuSERScOUNTpAGE',
//         totalUsersCount
//     } as const
// }
//
// type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
// export const toggleIsFetching = (onOff: boolean) => {
//     return {
//         type: 'USERS/TOGGLE_IS_FETCHING',
//         onOff
//     } as const
// }
//
// type followingInProgresACType = ReturnType<typeof followingInProgres>
// export const followingInProgres = (onOff: boolean, userID: number) => {
//     return {
//         type: "USERS/FOOLLOWING_IN_PROGRESS",
//         onOff, userID
//     } as const
// }
//
//
// export const getUsersThunkCreator = (pageSize: number, currentPage: number) => (dispatch: Dispatch) => {
//     dispatch(toggleIsFetching(true))
//     dispatch(setCurrentPage(currentPage))
//     usersApi.getUsers(pageSize, currentPage)
//         .then((data) => {
//                 dispatch(setUsers(data.items))
//                 dispatch(setTotalUsersCount(data.totalCount))
//                 dispatch(toggleIsFetching(false))
//             }
//         )
// }
//
// export const followThunkCreator = (userID: number) => (dispatch: Dispatch) => {
//     dispatch(followingInProgres(true, userID))
//     usersApi.follow(userID)
//         .then((responce) => {
//             if (responce.resultCode === 0) {
//                 dispatch(follow(userID))
//             }
//             dispatch(followingInProgres(false, userID))
//         })
// }
//
// export const unFollowThunkCreator = (userID: number) => (dispatch: Dispatch) => {
//     dispatch(followingInProgres(true, userID))
//     usersApi.unFollow(userID)
//         .then((responce) => {
//             if (responce.resultCode === 0) {
//                 dispatch(unFollow(userID))
//             }
//             dispatch(followingInProgres(false, userID))
//         })
// }


//-----------------------------------------------------------------------------

