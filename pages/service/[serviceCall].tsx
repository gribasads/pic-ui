import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import BlockInfo from '../../components/BlockInfo'
import BackButton from '../../components/Button/back'
import ConfirmButton from '../../components/Button/confirm'
import Modal from '../../components/modal'
import Page from '../../components/template/Page'
import i18n from '../../hook/i18n'
import { getServiceData } from '../../services/historic'


export default function serviceCall() {
    const router = useRouter()
    const id = router.query.serviceCall
    const cookies = parseCookies()
    const cpf = cookies.cpf
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [type, setType] = useState<number | null>(null)
    const [date, setDate] = useState()
    
    function getData(){
      getServiceData(cpf, id).then(response => {
        const dataFomated = Object.entries(response.data[0]).map(([key, value]) => ({
          label: i18n.t(`historic.${key}`),
          value
        }))
        setDate(response.data[0].dateService)
        console.log(date)
        setData(dataFomated)
      })
    }
    useEffect(() => {
      getData()
    }, [])

   function getOriginalDate() {
    data.includes('Data do Serviço') ? setDate(data.find(item => item.label === 'Data do Serviço').value) : null

    }
    
   
  return (
    <Page>

     <div className='flex justify-end mb-2 gap-3'> 
        <ConfirmButton name ='Finalizar' func={()=>{setOpen(true), setTitle('Finalizar Serviço'),setType(0)}} />
        <ConfirmButton name = 'Alterar'  func={()=>{setOpen(true), setTitle('Alterar Data de Serviço'),setType(1)}} /> 
     </div>
        <BlockInfo infos={data} title={'Chamados'}  />
        {
          open ? <Modal title={title} setOpen={setOpen} type={type} id={id} ogDate={date} /> : null
        }
        <div className='flex justify-end mt-2'>
        <BackButton />
        </div>
        <ToastContainer/>
    </Page>
  )
}
