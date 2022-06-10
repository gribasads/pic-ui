import { parseCookies } from "nookies";
import React, { createContext, useEffect, useState } from "react";
import router from "next/router";

export const  LoginContext = createContext({});

export const LoginProvider = (props) =>{
  
 const { 'token': token } = parseCookies(props)

  useEffect(()=>{
 if(!token) {
     router.push('/')
 }
  },[token])
    
    return(
        <LoginContext.Provider value={{  }}>
            {props.children}
        </LoginContext.Provider>
    )
}