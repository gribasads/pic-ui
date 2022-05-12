import React from 'react'

export default function ConfirmButton({name, func}: {name: string, func: () => void}) {
  return (
    <button className='p-2 bg-black border rounded 
     border-gray-500 hover:opacity-70 text-white' onClick={func}>{name}</button>
  )
}
