import React, {useState} from 'react'
import { IconMenu, IconMenuClose } from '../icons'

export default function Menu() {
    const [open, setOpen] = useState(false)
  return (
    <div>
     <button onClick={()=>setOpen(prev => !prev)}>
     {!open ?IconMenu():IconMenuClose()}
    </button>   
        
    </div>
  )
}
