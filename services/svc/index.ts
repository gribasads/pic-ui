import { api } from "../api";

export const getService = async (cpfEmployee: any) => {
    const response = api.get(`service/${cpfEmployee}`)
    return (await response).data
   }
