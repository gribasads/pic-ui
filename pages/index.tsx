import Link from 'next/link'
import React from 'react'
import { IconTop, IconService, IconUser,IconHistoric } from '../components/icons'
import BlockMenu from '../components/template/BlockMenu'
import Page from '../components/template/Page'


export default function index() {
  return (
    
      <div className='bg-amber-400'>
        <Link href='/home' passHref>
            <button>Entrar</button>
        </Link>
      </div>
    
  )
}