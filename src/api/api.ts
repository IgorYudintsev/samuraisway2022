import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '0e5dc50f-7e9f-4eda-9157-a63c5026aaad'
    }
})


export const usersApi = {
    getUsers(pageSize: number, currentPage: number) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then((responce) => {
                    return responce.data
                }
            )
    },
    follow(userID: number) {
        return instance.post(`follow/${userID}`)
            .then((responce) => {
                return responce.data
            })
    },
    unFollow(userID: number) {
        return instance.delete(`follow/${userID}`)
            .then((responce) => {
                return responce.data
            })
    },
    getProfile(getItemResult: number) {
        // return instance.get(`profile/${getItemResult}`)
        //     .then((responce) => {
        //         return responce.data
        //     })
        return profileApi.getProfile(getItemResult)
    }
}


export const profileApi = {
    getProfile(getItemResult: number) {
        return instance.get(`profile/${getItemResult}`)
            .then((responce) => {
                return responce.data
            })
    },
    getStatus(userID: number) {
        return instance.get(`/profile/status/${userID}`)
            .then((responce) =>{
                console.log(responce)
                return  responce.data
            })
    },
    updateStatus(status: string) {
        console.log(status)
           return instance.put(`profile/status`, {status:status})
            // .then((responce) => {
            //     return responce.data
            // })
    }
    // updateStatus(status: string) {
    //     return instance.put(`/profile/status`, {status})
    //         .then((responce) => {
    //             return responce.data
    //         })
    // }
}


export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then((responce) => {
                return responce.data
            })
    }
}


//-----------------------------------------------2--------------------------------------
// export const getUsers = (pageSize: number, currentPage: number) => {
//     return instance.get(`users?count=${pageSize}&page=${currentPage}`,
//         {withCredentials: true}
//     )
//         .then((responce) => {
//                 return responce.data
//             }
//         )
// }


//--------------------------------------------------1--------------------------------------
// export const getUsers = (pageSize: number, currentPage: number) => {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`,
//         {withCredentials: true}
//     )
//         .then((responce) => {
//                 return responce.data
//             }
//         )
// }

