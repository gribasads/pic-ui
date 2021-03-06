import { createContext, useState } from "react";
import { api } from "../services/api";
import {destroyCookie, setCookie} from 'nookies';
import  Router  from "next/router";
import { toast, ToastContainer } from "react-toastify";
import i18n from "./i18n";

type User = {
  id: number;
  cpf: string;
}

type SignInData = {
  login: string;
  password: string;
}
type AuthContextType = {
  isAuthenticated: boolean;
  userData: User;
  signIn: (data: SignInData) => Promise<void>;
  signOut
};


export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {

  const [userData, setUserData] = useState<User>()

  const isAuthenticated = !!userData;

 

  async function signIn({ login,password }: SignInData) {
    try {
      const response: any = await api.post('users/login', {login, password})
      const token = (await response).data?.token; 
      const id = (await response).data?.id;
      const cpf = (await response).data?.cpf;
      setCookie(undefined, 'token', token, {
        maxAge:  60 * 60 *1, //1 HOUR
      });
      setCookie(undefined, 'id', id, {
        maxAge:  60 * 60 *1, //1 HOUR
      });
      setCookie(undefined, 'cpf', cpf, {
        maxAge:  60 * 60 *1, //1 HOUR
      });
      setUserData((await response).data?.id);
     
      Router.push('/home');
    } catch (error) {
      toast.error(i18n.t('auth.error'));
    }
   
  }

    async function signOut() {
    destroyCookie(undefined, 'token')
    destroyCookie(undefined, 'id')
    setUserData(undefined)
    destroyCookie(undefined, 'cpf')
    Router.push('/')
  }
  
  return (
    <AuthContext.Provider value={{ userData, isAuthenticated , signIn, signOut}}>
      { children }
      <ToastContainer/>
    </AuthContext.Provider>
  )
}
