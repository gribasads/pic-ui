import React from 'react'
import Topbar from './Topbar'
import Menu from './Menu'

interface Prop {
    children: React.ReactComponentElement<any>
    title?: string
}

export default function Page(prop:Prop ) {
    const {children, title} = prop
  return (
    <>
    <div className='fixed p-5'>
    <Menu/>
    </div>
    <Topbar/>
    <h1 className='text-4xl px-32 py-32'>{title}</h1>
    <div className='w-full max-w-screen-xl px-4 py-4 mx-auto'>
    {children}
    </div>
    </>
  )
}
