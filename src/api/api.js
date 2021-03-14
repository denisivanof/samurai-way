import *as axios from "axios"

const instans = axios.create(
    {
     withCredentials: true,
     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
     headers: {
        "API-KEY":"5438a20f-4bf4-4ccd-922c-e8a98513a88c"
    }
});

export const getUsersAPI = (currentPage, pageSize ) => {
    return instans.get(`users?page=${currentPage}&count=${pageSize}`,
).then(response => response.data)
}

export const UnFollowApi = (id) => {
    return instans.delete(`follow/${id}`).then(response => response.data)
}
export const FollowApi = (id) => {
    return instans.post(`follow/${id}`,{}).then(response => response.data)
}
export const ProfilApi = (userId) => {
    return instans.get(`profile/`+ userId)
}

export const getMe = () => {
    return instans.get(`auth/me`).then(response => response.data)
};

export const getStatusAPI = (userId) =>{
    return instans.get(`profile/status/`+ userId)
}

export const updateStatusAPI = (status) =>{
    return instans.put(`profile/status`, {status})
}

export const loginApi = (email, password, rememberMe) => {
    return instans.post(`auth/login`,{email, password, rememberMe })
};
export const logoutApi = () => {
    return instans.delete(`auth/login`,)
};