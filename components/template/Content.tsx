import React from 'react'

interface Prop {
    children: React.ReactNode
}

export default function Content( prop: Prop ) {
    const {children} = prop
  return (
    <div className='flex flex-col mt-7'>
    {children}
    </div>
  )
}
