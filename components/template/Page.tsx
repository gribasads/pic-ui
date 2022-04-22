import React from 'react'
import Topbar from './Topbar'
import Menu from './Menu'
import Content from './Content'

interface Prop {
    children: React.ReactComponentElement<any>
    title?: string
}

export default function Page(prop:Prop ) {
    const {children, title} = prop
  return (
    <div className='flex min-h-screen w-screen'>
    <div className='fixed p-5'>
    <Menu/>
    </div>
    <div className='flex flex-col w-full'>
    <Topbar/>
    <div className='p-7 h-full '>
    <h1 className='font-medium text-3xl mb-1'>{title}</h1>
    <Content>
    {children}
    </Content>
    </div>
    </div>
    </div>
  )
}
