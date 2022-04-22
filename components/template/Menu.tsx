import React, {useState} from 'react'
import { IconMenu, IconMenuClose } from '../icons'

export default function Menu() {
    const [open, setOpen] = useState(false)
  return (
    <div>
     <button onClick={()=>setOpen(prev => !prev)}>
     {!open ?IconMenu():IconMenuClose()}
    </button>   
        {open && <div className='fixed inset-0 z-10 bg-black opacity-50' onClick={()=>setOpen(false)}>
            <div className='inline-block h-full bg-orange-300'>
                <button onClick={()=>alert('bomba')}>TESTE</button>
            </div>
            </div>}
    </div>
  )
}
