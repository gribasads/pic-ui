import { useRouter } from 'next/router'
import React from 'react'
import ConfirmButton from '../components/Button/confirm'
import { IconTop } from '../components/icons'
import Input from '../components/Input'



export default function index() {
  const router = useRouter()
  return (
      <div className='flex bg-amber-300 shadow-xl h-screen w-screen items-center justify-center'>
        <div className='bg-white w-80 h-80  '>
          <i className='flex justify-center mt-9'>{IconTop()}</i>
          <div className='grid justify-center mt-10 gap-4' >
            <Input type='text' placeholder='Login' />
            <Input type='password'placeholder='Senha' />
            <ConfirmButton name='Entrar' func={()=> router.push('/home')} />
          </div>
        </div>
      </div>
    
  )
}