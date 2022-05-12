import React from 'react'
import BlockInfo from '../components/BlockInfo'
import BackButton from '../components/Button/back'
import ConfirmButton from '../components/Button/confirm'
import Page from '../components/template/Page'

export default function profile() {
  const infos = [
    { id: 1, label: 'Nome', value: 'John Doe' },
    { id: 4, label: 'CPF', value: '865.444.232.12' },
    { id: 5, label: 'Funcao', value: 'Ténico em eletrônica' },
    { id: 6, label: 'Regiao', value: 'Porto Alegre - ZN' },
    { id: 3, label: 'Telefone', value: '+55 11 99999-9999' },
    { id: 2, label: 'E-mail', value: 'john@gmail.com' },
  ]
  return (
    <Page title='Dados Cadastrais'>
      <BlockInfo infos={infos} title={'Dados Pessoais'}/>
      <div className='flex justify-end pt-2 gap-4'>
      <BackButton />
      <ConfirmButton name='Alterar Senha' func={()=>console.log('oi') }/>
      </div>
      </Page>
  )
}
