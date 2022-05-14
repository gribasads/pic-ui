import { useRouter } from 'next/router'
import React, { useState } from 'react'
import BlockInfo from '../../components/BlockInfo'
import BackButton from '../../components/Button/back'
import ConfirmButton from '../../components/Button/confirm'
import Modal from '../../components/modal'
import Page from '../../components/template/Page'


export default function serviceCall() {
    const router = useRouter()
    const { svc } = router.query
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [type, setType] = useState<number | null>(null)

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
        <ConfirmButton name ='Finalizar' func={()=>{setOpen(true), setTitle('Finalizar Serviço'),setType(0)}} />
        <ConfirmButton name = 'Alterar'  func={()=>{setOpen(true), setTitle('Alterar Data de Serviço'),setType(1)}} /> 
     </div>
        <BlockInfo infos={infos} title={'Chamados'}  />
        {
          open ? <Modal title={title} setOpen={setOpen} type={type} /> : null
        }
        <div className='flex justify-end mt-2'>
        <BackButton />
        </div>
    </Page>
  )
}
