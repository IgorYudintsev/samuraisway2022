import {log} from "util";

export type InitialStateType = {
    users: UsersType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
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
    isFetching: true
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
        case "TOGGLE_IS_FETCHING":{
            return {...state,isFetching:action.onOff}
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
    }as const
}


//------------------------------------------------------------------------------------------------

// import {log} from "util";
//
// export type InitialStateType = {
//     users: UsersType[]
//     pageSize: number,
//     totalUsersCount: number,
//     currentPage: number,
//     isFetching: boolean
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
//
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
//     isFetching: true
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
//         case "TOGGLE_IS_FETCHING":{
//             return {...state,isFetching:action.onOff}
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
//
// type FollowACType = ReturnType<typeof followAC>
// export const followAC = (userId: number) => {
//     return {
//         type: "FOLLOW",
//         userId
//     } as const
// }
//
// type UnFollowACType = ReturnType<typeof UnfollowAC>
// export const UnfollowAC = (userId: number) => {
//     return {
//         type: "UN_FOLLOW",
//         userId
//     } as const
// }
//
// type setUsersACType = ReturnType<typeof setUsersAC>
// export const setUsersAC = (users: UsersType[]) => {
//     return {
//         type: "SET_USERS",
//         users
//     } as const
// }
//
// type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
// export const setCurrentPageAC = (currentPage: number) => {
//     return {
//         type: 'SET_CURRENTpAGE',
//         currentPage
//     } as const
// }
//
// type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
// export const setTotalUsersCountAC = (totalUsersCount: number) => {
//     return {
//         type: 'SET_TOTALuSERScOUNTpAGE',
//         totalUsersCount
//     } as const
// }
//
// type toggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
// export const toggleIsFetchingAC = (onOff: boolean) => {
//     return {
//         type: 'TOGGLE_IS_FETCHING',
//         onOff
//     }as const
// }