import { api } from "../api";

export const getProfile = async (id: any) => {
 const response = api.get(`users/${id}`)
 return (await response).data
}