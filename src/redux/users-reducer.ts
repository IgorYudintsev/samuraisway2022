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
        case "FOLLOW": {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}

        }
        case "UN_FOLLOW": {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        }
        case "SET_USERS": {
            return {...state, users: action.users}
        }
        case "SET_CURRENTpAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET_TOTALuSERScOUNTpAGE": {
            // console.log(action.totalUsersCount)
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.onOff}
        }
        case "FOOLLOWING_IN_PROGRESS": {
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

type FollowACType = ReturnType<typeof follow>
export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}

type UnFollowACType = ReturnType<typeof unFollow>
export const unFollow = (userId: number) => {
    return {
        type: "UN_FOLLOW",
        userId
    } as const
}

type setUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: UsersType[]) => {
    return {
        type: "SET_USERS",
        users
    } as const
}

type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENTpAGE',
        currentPage
    } as const
}

type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTALuSERScOUNTpAGE',
        totalUsersCount
    } as const
}

type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (onOff: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        onOff
    } as const
}

type followingInProgresACType = ReturnType<typeof followingInProgres>
export const followingInProgres = (onOff: boolean, userID: number) => {
    return {
        type: "FOOLLOWING_IN_PROGRESS",
        onOff, userID
    } as const
}


export const getUsersThunkCreator = (pageSize: number, currentPage: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    usersApi.getUsers(pageSize, currentPage)
        .then((data) => {
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(toggleIsFetching(false))
            }
        )
}

export const followThunkCreator = (userID: number) => (dispatch: Dispatch) => {
    dispatch(followingInProgres(true, userID))
    usersApi.follow(userID)
        .then((responce) => {
            if (responce.resultCode === 0) {
                dispatch(follow(userID))
            }
            dispatch(followingInProgres(false, userID))
        })
}

export const unFollowThunkCreator = (userID: number) => (dispatch: Dispatch) => {
    dispatch(followingInProgres(true, userID))
    usersApi.unFollow(userID)
        .then((responce) => {
            if (responce.resultCode === 0) {
                dispatch(unFollow(userID))
            }
            dispatch(followingInProgres(false, userID))
        })
}


//-----------------------------------------------------------------------------


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
//         case "FOLLOW": {
//             return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
//
//         }
//         case "UN_FOLLOW": {
//             return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
//         }
//         case "SET_USERS": {
//             return {...state, users: action.users}
//         }
//         case "SET_CURRENTpAGE": {
//             return {...state, currentPage: action.currentPage}
//         }
//         case "SET_TOTALuSERScOUNTpAGE": {
//             // console.log(action.totalUsersCount)
//             return {...state, totalUsersCount: action.totalUsersCount}
//         }
//         case "TOGGLE_IS_FETCHING": {
//             return {...state, isFetching: action.onOff}
//         }
//         case "FOOLLOWING_IN_PROGRESS":{
//             return {...state,followingInProgres: action.onOff
//                     ? [...state.followingInProgres,action.userID]
//                     : state.followingInProgres.filter(el=>el!==action.userID)
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
//         type: "FOLLOW",
//         userId
//     } as const
// }
//
// type UnFollowACType = ReturnType<typeof unFollow>
// export const unFollow = (userId: number) => {
//     return {
//         type: "UN_FOLLOW",
//         userId
//     } as const
// }
//
// type setUsersACType = ReturnType<typeof setUsers>
// export const setUsers = (users: UsersType[]) => {
//     return {
//         type: "SET_USERS",
//         users
//     } as const
// }
//
// type setCurrentPageACType = ReturnType<typeof setCurrentPage>
// export const setCurrentPage = (currentPage: number) => {
//     return {
//         type: 'SET_CURRENTpAGE',
//         currentPage
//     } as const
// }
//
// type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
// export const setTotalUsersCount = (totalUsersCount: number) => {
//     return {
//         type: 'SET_TOTALuSERScOUNTpAGE',
//         totalUsersCount
//     } as const
// }
//
// type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
// export const toggleIsFetching = (onOff: boolean) => {
//     return {
//         type: 'TOGGLE_IS_FETCHING',
//         onOff
//     } as const
// }
//
// type followingInProgresACType = ReturnType<typeof followingInProgres>
// export const followingInProgres = (onOff: boolean,userID:number) => {
//     return {
//         type: "FOOLLOWING_IN_PROGRESS",
//         onOff,userID
//     }as const
// }

//-----------------------------------------------------------------------------


