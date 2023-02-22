import {log} from "util";

export type InitialStateType = {
    users: UsersType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
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
    currentPage: 2
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
        default:
            return state
    }
}

type MainUsersType = FollowACType | UnFollowACType | setUsersACType | setCurrentPageACType | setTotalUsersCountACType
type FollowACType = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}

type UnFollowACType = ReturnType<typeof UnfollowAC>
export const UnfollowAC = (userId: number) => {
    return {
        type: "UN_FOLLOW",
        userId
    } as const
}

type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: "SET_USERS",
        users
    } as const
}

type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET_CURRENTpAGE',
        currentPage
    } as const
}

type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTALuSERScOUNTpAGE',
        totalUsersCount
    } as const
}