import { useRouter } from 'next/router'
import React from 'react'
import BlockInfo from '../../components/BlockInfo'
import BackButton from '../../components/Button/back'
import ConfirmButton from '../../components/Button/confirm'
import Page from '../../components/template/Page'


export default function serviceCall() {
    const router = useRouter()
    const { svc } = router.query

    const infos = [
      { id: 1, label: 'Cliente', value: 'John Doe' },
      { id: 4, label: 'CPF', value: '865.444.232.12' },
      { id: 5, label: 'Funcao', value: 'Ténico em eletrônica' },
      { id: 6, label: 'Regiao', value: 'Porto Alegre - ZN' },
      { id: 3, label: 'Telefone', value: '+55 11 99999-9999' },
      { id: 2, label: 'E-mail', value: 'john@gmail.com' },
      { id: 7, label: 'Status', value: svc },
    ]
  return (
    <Page>

<div className='flex justify-end mb-2 gap-3'> 
        <ConfirmButton name ='Finalizar' func={()=>alert('serviço finalizar')} />
        <ConfirmButton name = 'Alterar'  func={()=>alert('serviço finalizar')} /> 
</div>
        <BlockInfo infos={infos} title={'Chamados'}  />
        <div className='flex justify-end mt-2'>
        <BackButton />
        </div>
    </Page>
  )
}
