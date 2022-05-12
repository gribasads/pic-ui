import React from 'react'

export default function Input({placeholder,type}: {placeholder: string, type:string}) {
  return (
    <input type={type} placeholder={placeholder} className='border-2 border-slate-700 rounded p-2' />
  )
}
