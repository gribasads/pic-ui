import { api } from "../api";

export const getHistoric = async (cpfEmployee: any) => {
    const response = api.get(`historic/${cpfEmployee}`)
    return (await response).data
   }

export const getServiceData = async (cpfEmployee: any, idService:any) => {
    const response = api.get(`serviceData/${cpfEmployee}&${idService}`)
    return (await response).data
   }