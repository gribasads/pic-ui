import { useRouter } from 'next/router'
import React from 'react'
import BlockInfo from '../../components/BlockInfo'
import BackButton from '../../components/Button/back'
import Page from '../../components/template/Page'

export default function historicOpen() {
    const router = useRouter()
    const { id } = router.query

    const infos = [
      { id: 1, label: 'Cliente', value: 'John Doe' },
      { id: 4, label: 'CPF', value: '865.444.232.12' },
      { id: 5, label: 'Funcao', value: 'Ténico em eletrônica' },
      { id: 6, label: 'Regiao', value: 'Porto Alegre - ZN' },
      { id: 3, label: 'Telefone', value: '+55 11 99999-9999' },
      { id: 2, label: 'E-mail', value: 'john@gmail.com' },
    ]
  return (
    <Page>
        <BlockInfo infos={infos} title={'Chamado'}  />
        <div className='flex justify-end mt-2'>
        <BackButton />
        </div>
    </Page>
  )
}
