import { createContext, useState } from "react";
import { api } from "../services/api";
import {destroyCookie, setCookie} from 'nookies';
import  Router  from "next/router";
import { toast, ToastContainer } from "react-toastify";

type User = {
  id: number;
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
      setCookie(undefined, 'token', token, {
        maxAge:  60 * 60 *1, //1 HOUR
      });
      setCookie(undefined, 'id', id, {
        maxAge:  60 * 60 *1, //1 HOUR
      });
      setUserData((await response).data?.id);

      Router.push('/home');
    } catch (error) {
      alert(error.message)
    }
   
  }

    async function signOut() {
    destroyCookie(undefined, 'nextauthtoken')
    destroyCookie(undefined, 'unopCode')
    Router.push('/')
  }
  
  return (
    <AuthContext.Provider value={{ userData, isAuthenticated , signIn, signOut}}>
      { children }
      <ToastContainer/>
    </AuthContext.Provider>
  )
}
