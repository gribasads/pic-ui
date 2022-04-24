import React from 'react'
import { IconTop } from '../components/icons'
import BlockMenu from '../components/template/BlockMenu'
import Page from '../components/template/Page'


export default function index() {
  return (
    
      <Page title='Bem Vindo'>
        <div className="flex justify-center">
          <BlockMenu url='/service' label='Chamados' icon={IconTop}/>
          <BlockMenu url='/historic' label='Histórico' icon={IconTop}/>
          <BlockMenu url='/profile' label='Dados Cadastrais' icon={IconTop}/>
        </div>
      </Page>
    
  )
}
