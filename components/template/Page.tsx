import React from 'react'
import Topbar from './Topbar'
import Menu from './Menu'
import Content from './Content'
import Title from './Title'

interface Prop {
  children: React.ReactComponentElement<any>
  title?: string
}

export default function Page(prop: Prop) {
  const { children, title } = prop
  return (
    <div className="flex min-h-screen w-screen bg-orange-50">
        <Menu />
      <div className="flex flex-col w-full">
        <Topbar />
        <div className={`p-7 h-full`}>
          <Title title={title} />
        <Content>
          {children}
        </Content>
        </div>
      </div>
    </div>
  )
}
