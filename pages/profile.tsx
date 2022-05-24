import { parseCookies } from 'nookies'
import React, { useEffect, useState } from 'react'
import Change from '../components/modal/changePassword'
import BlockInfo from '../components/BlockInfo'
import BackButton from '../components/Button/back'
import ConfirmButton from '../components/Button/confirm'
import Page from '../components/template/Page'
import { getProfile } from '../services/profile'
import i18n from '../hook/i18n';
import {  ToastContainer } from 'react-toastify'


export default function profile() {
  const [data, setData] = useState<any>()
  const [open, setOpen] = useState(false)
  

  const cookies = parseCookies()
  const id = cookies.id

  function getData () {
  getProfile(id).then(response => {
   const dataFomated = Object.entries(response.data[0]).map(([key, value]) => ({
      label: i18n.t(`profile.${key}`),
      value
    }))
    setData(dataFomated)
  })
  }


  

  useEffect(() => {
    getData()
  }, [])

  return (
    <Page title='Dados Cadastrais'>
       {data && <BlockInfo infos={data} title='Dados Cadastrais' />}
      <div className='flex justify-end pt-2 gap-4'>
      {
          open ? <Change  setOpen={setOpen} id={id} /> : null
        }
      <BackButton />
      <ConfirmButton name='Alterar Senha' func={()=>setOpen(true)}/>
      </div>
      </Page>
  )
}
