import { createContext,useState } from "react";
import { setCookie,  destroyCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import 'react-toastify/dist/ReactToastify.min.css';
import { api } from "../services/api";
import { toast, ToastContainer } from 'react-toastify';
import router from "next/router";

type User = {
  name: string;
  email: string;
  
}

type SignInData = {
  username: string;
  password: string;
}


type AuthContextType = {
  isAuthenticated: boolean;
  signOut: any
  signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children } : {children: any}) {

  const [userData, setUserData] = useState<User>()
   
  const isAuthenticated = !!userData;
  
  
   async function signIn({ username,password }: SignInData) {
     try {
      const response = api.post('/users/login',{username,password})
    if((await response).data.success)
     Router.push('/home');
     } catch (error) {
      toast.error('Email ou senha incorreto')
     }
  }

  async function signOut() {
    destroyCookie(undefined, 'nextauthtoken')
    destroyCookie(undefined, 'unopCode')
    router.push('/')
  }

  
  return (
    <AuthContext.Provider value={{  isAuthenticated, signIn,signOut}}>
      {children}
      <ToastContainer/>
    </AuthContext.Provider>
  )
}
