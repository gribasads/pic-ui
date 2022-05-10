import React from 'react'
import { IconTop, IconService, IconUser,IconHistoric } from '../components/icons'
import BlockMenu from '../components/template/BlockMenu'
import Page from '../components/template/Page'


export default function home() {
  return (
    
      <Page title='Bem Vindo'>
        <div className="flex justify-center">
          <BlockMenu url='/service' label='Chamados' icon={IconService}/>
          <BlockMenu url='/historic' label='Histórico' icon={IconHistoric}/>
          <BlockMenu url='/profile' label='Dados Cadastrais' icon={IconUser}/>
        </div>
      </Page>
    
  )
}
