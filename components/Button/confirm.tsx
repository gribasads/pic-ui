import React from 'react'

interface IProps {
  name: string
  func: () => void
  disabled?: boolean
}
export default function ConfirmButton(props: IProps) {
  const { name, func, disabled } = props
  return (
    <button className={`p-2 bg-black border rounded 
     border-gray-500 hover:opacity-70 text-white ${disabled == true ? 'opacity-70 cursor-not-allowed':null}`} disabled={disabled} onClick={func}>{name}</button>
  )
}
