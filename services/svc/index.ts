import { api } from "../api";

export const getService = async (cpfEmployee: any) => {
    const response = api.get(`service/${cpfEmployee}`)
    return (await response).data
   }
   
export const doneService = async (idService:any,description:any) => {
    const response = api.put(`done/${idService}`,{description})
    return (await response).data
   }

export const alterService = async (cpfEmployee:any, originalDate:any, newDate:any, idService:any) => {
    const response = api.post(`alter`,{cpfEmployee, originalDate, newDate, idService})
    return (await response).data
   }