import Link from 'next/link'
import React from 'react'
import { IconTop } from '../icons'

export default function Topbar() {
  return (
    <div
    className='flex justify-center bg-gray-100 font-bold py-6 px-6 shadow-md'
    >
      <a href="/">{IconTop()}</a>
    </div>
  )
}
