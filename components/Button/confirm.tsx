import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip';

interface IProps {
  name: string
  func: () => void
  disabled?: boolean
}
export default function ConfirmButton(props: IProps) {
  const { name, func, disabled } = props
  
 

  return (
    <>
    {disabled == true?<><button className={`p-2 bg-black border rounded 
     border-gray-500 opacity-70 text-white cursor-not-allowed`} data-tip="Data limite atingida" data-place='top'>{name}</button><ReactTooltip /></>:
     <button className={`p-2 bg-black border rounded 
     border-gray-500 hover:opacity-70 text-white`} onClick={func}>{name}</button>
     }
     
     </>
  )
}
