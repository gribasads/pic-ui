import React, {useState} from 'react'
import { IconMenu, IconMenuClose } from '../icons'

export default function Menu() {
    const [open, setOpen] = useState(false)
  return (
    <div className='fixed'>
    <div className='inline-block p-3'>
     <button onClick={()=>setOpen(prev => !prev)}>
     {!open ?IconMenu():IconMenuClose()}
    </button>
    </div>
    {
        open ? <>
        <div className=' fixed h-screen w-32  bg-black opacity-50'>
          oi
        </div>
        </>:null
    }   
        
    </div>
  )
}
