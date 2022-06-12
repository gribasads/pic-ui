import React from 'react'
import { useRouter } from 'next/router'

export default function BackButton() {
  const router = useRouter()
  return (
    <button className='p-2 bg-white border-2 rounded 
    border-solid border-gray-500 hover:opacity-70' onClick={()=>router.push('/home')}>Voltar</button>
  )
}
