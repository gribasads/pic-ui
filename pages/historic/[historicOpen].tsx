import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import React, { useEffect, useState } from 'react'
import BlockInfo from '../../components/BlockInfo'
import BackButton from '../../components/Button/back'
import Page from '../../components/template/Page'
import i18n from '../../hook/i18n'
import { getServiceData } from '../../services/historic'

export default function historicOpen() {
    const router = useRouter()
    const id = router.query.historicOpen
    const cookies = parseCookies()
    const cpf = cookies.cpf
    const [data, setData] = useState([])
    
    function getData(){
      getServiceData(cpf, id).then(response => {
        const dataFomated = Object.entries(response.data[0]).map(([key, value]) => ({
          label: i18n.t(`historic.${key}`),
          value
        }))
        setData(dataFomated)
      })
    }
    useEffect(() => {
      getData()
    }, [])
  return (
    <Page>
        <BlockInfo infos={data} title={'Chamado'}  />
        <div className='flex justify-end mt-2'>
        <BackButton />
        </div>
    </Page>
  )
}
