import Link from 'next/link'
import React, {useState} from 'react'
import { IconHistoric, IconLogout, IconMenu, IconMenuClose, IconService, IconUser } from '../icons'

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
          <div className='p-10 flex-col'>
           <Link href={'/service'} passHref>
             <div className='text-amber-500 mb-10 cursor-pointer'>
             {IconService()}
             </div>
             </Link>
           <Link href={'/historic'} passHref><div className='text-amber-500 mb-10 cursor-pointer'>
             {IconHistoric()}
             </div></Link>
           <Link href={'/profile'} passHref><div className='text-amber-500 mb-10 cursor-pointer'>
             {IconUser()}
             </div></Link>
           <Link href={'/'} passHref><div className='text-amber-500 mt-80 cursor-pointer'>
             {IconLogout()}
             </div></Link>
          </div>
        </div>
        </>:null
    }   
        
    </div>
  )
}
