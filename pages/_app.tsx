import '../styles/globals.css'
import '../hook/i18n'
import type { AppProps } from 'next/app'
import {  AuthProvider } from '../hook/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
    
  )
}

export default MyApp
