export type InitialStateType = {
    users: UsersType[]
}

export type UsersType = {
    id: number,
    photoUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType
}

type LocationType = {
    city: string,
    counry: string
}

let initialState: InitialStateType = {
    users: []
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

type MainUsersType = FollowACType | UnFollowACType | setUsersACType
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

// case FOLLOW: {
//     let partOfStateCopy = {
//         ...partOfState,
//         users: partOfState.users.map(user => {
//             if (user.id === action.userId) {
//                 return {...user, followed: true}
//             }
//             return user;
//         })
//     };
//     return partOfStateCopy;
// }
// case UNFOLLOW: {
//     let partOfStateCopy = {
//         ...partOfState,
//         users: partOfState.users.map(user => {
//             if (user.id === action.userId) {
//                 return {...user, followed: false}
//             }
//             return user;
//         })
//     };
//     return partOfStateCopy;
// }