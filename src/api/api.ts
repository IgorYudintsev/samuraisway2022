import axios from "axios";

const instance=axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers:{
        'API-KEY': '0e5dc50f-7e9f-4eda-9157-a63c5026aaad'
    }
})


export const usersApi={
    getUsers(pageSize: number, currentPage: number){
        return instance.get(`users?count=${pageSize}&page=${currentPage}`,
            {withCredentials: true}
        )
            .then((responce) => {
                    return responce.data
                }
            )
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
