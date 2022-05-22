import React from 'react'
import { IconTop } from '../components/icons'
import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { AuthContext } from '../hook/AuthContext';
import {  ToastContainer } from 'react-toastify'



export default function index() {

  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data) {
    await signIn(data)
  }


  return (

<>
    
      <form onSubmit={handleSubmit(handleSignIn)}>
      <div className='flex bg-amber-300 shadow-xl h-screen w-screen items-center justify-center'>
        <div className='bg-white w-80 h-80  '>
          <i className='flex justify-center mt-9'>{IconTop()}</i>
          <div className='grid justify-center mt-10 gap-4' >
          <input
                {...register('login')} 
                id="login"
                name="login"
                autoComplete="login"
                required
                className={`px-4 py-3 rounded-lg bg-gray-200 mt-2 `}
                placeholder="Email"
              />
            <input
               {...register('password')}
                id="password"
                name="password"
                type="password"

                required
                className={`px-4 py-3 rounded-lg bg-gray-200 mt-2`}
                placeholder="Senha"
              />
              <button type='submit' className={`
                    w-full bg-gray-800 hover:bg-gray-600
                    text-white rounded-lg px-4 py-3 mt-6
                    `}>Entrar</button>

          </div>
        </div>
        <ToastContainer />
      </div>
            </form>
    </>
  )
}