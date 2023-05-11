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
                //console.log(responce)
                return  responce.data
            })
    },
    updateStatus(status: string) {
        console.log(status)
           return instance.put(`profile/status`, {status:status})
            // .then((responce) => {
            //     return responce.data
            // })
    },
    savePhoto(photoFile: string) {
        const formData=new FormData();
        formData.append("image",photoFile)
        return instance.put(`profile/photo`, formData, {
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            }
        );
    },
    saveProfile(data:any){
        return instance.put(`profile`,data)
    }
}


export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then((responce) => {
                return responce.data
            })
    },
    loginMe(email:string,password:string,rememberMe:boolean,captcha:string|null){
        return instance.post(`auth/login`,{email,password,rememberMe,captcha})
    },
    logOut(){
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
            .then((responce) => {
                return responce.data
            })
    }
}



