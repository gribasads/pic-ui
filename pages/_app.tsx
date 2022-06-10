import '../styles/globals.css'
import '../hook/i18n'
import type { AppProps } from 'next/app'
import {  AuthProvider } from '../hook/AuthContext';
import { useContext} from 'react';
import { LoginContext, LoginProvider } from '../hook/verifyLoginContext';

function MyApp({ Component, pageProps }: AppProps) {
  useContext(LoginContext);
  return (
    
    
    <LoginProvider>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
    </LoginProvider>
    
  )
}

export default MyApp
