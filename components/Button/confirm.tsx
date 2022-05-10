import React from 'react'

export default function ConfirmButton({name}: {name: string}) {
  return (
    <button className='p-2 bg-emerald-300 border-2 rounded 
    border-solid border-gray-500 hover:opacity-70'>{name}</button>
  )
}
