import React from 'react'

interface Prop {
    title?: string
}
export default function Title(prop: Prop) {
    const { title } = prop
  return (
    <div>
        <h1 className="px-24 py-8 text-4xl  ">{title}</h1>
    </div>
  )
}
