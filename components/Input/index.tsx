import React from 'react'

export default function Input({placeholder}: {placeholder: string}) {
  return (
    <input type="text" placeholder={placeholder} className='border-2 border-slate-700 rounded p-2' />
  )
}
