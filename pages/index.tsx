import { useRouter } from 'next/router'
import React from 'react'
import ConfirmButton from '../components/Button/confirm'
import { IconTop } from '../components/icons'
import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { AuthContext } from '../hook/AuthContext'
import { api } from '../services/api'
import { toast, ToastContainer } from 'react-toastify'



export default function index() {
  const router = useRouter()

  const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext)
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    async function handleSignIn() {
       const response = api.post('/users/login',{login:username,password:password}).then(res => {
      if(res.data?.success == true){
        router.push('/home')
      }
      if(res.data?.success == false) toast.error('Email ou senha incorreto')
      })
 }


  return (

    
      <div className='flex bg-amber-300 shadow-xl h-screen w-screen items-center justify-center'>
        <div className='bg-white w-80 h-80  '>
          <i className='flex justify-center mt-9'>{IconTop()}</i>
          <div className='grid justify-center mt-10 gap-4' >
          <input
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                name="username"
                autoComplete="username"
                required
                className={`px-4 py-3 rounded-lg bg-gray-200 mt-2 `}
                placeholder="Email"
              />
            <input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={`px-4 py-3 rounded-lg bg-gray-200 mt-2`}
                placeholder="Senha"
              />

            
<button onClick={()=> handleSignIn()} className={`
                    w-full bg-gray-800 hover:bg-gray-600
                    text-white rounded-lg px-4 py-3 mt-6
                `}> Entrar</button>

          </div>
        </div>
        <ToastContainer />
      </div>
    
  )
}