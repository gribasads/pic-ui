import { api } from "../api";

export const getProfile = async (id: any) => {
 const response = api.get(`users/${id}`)
 return (await response).data
}

export const changePassword = async (id: any, data: any) => {
    const response = api.put(`change/${id}`, {password:data})
    return (await response).data
}