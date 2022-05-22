import { parseCookies } from 'nookies'
import React, { useEffect, useState } from 'react'
import BlockInfo from '../components/BlockInfo'
import BackButton from '../components/Button/back'
import ConfirmButton from '../components/Button/confirm'
import Page from '../components/template/Page'
import { getProfile } from '../services/profile'

type profileData = {
  cpf: string;
  name: string;
  occupation: string;
  zone: string;
  phone: string;
}

export default function profile() {
  const [data, setData] = useState<any>()

  

  const cookies = parseCookies()
  const id = cookies.id

  function getData () {
  getProfile(id).then(response => {
   const dataFomated = Object.entries(response.data[0]).map(([key, value]) => ({
      label: key,
      value
    }))
    setData(dataFomated)
  })
  }


  

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <Page title='Dados Cadastrais'>
       {data && <BlockInfo infos={data} title='Dados Cadastrais' />}
      <div className='flex justify-end pt-2 gap-4'>
      <BackButton />
      <ConfirmButton name='Alterar Senha' func={()=>console.log('oi') }/>
      </div>
      </Page>
  )
}
