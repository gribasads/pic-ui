import React from 'react'
import BackButton from '../../components/Button/back'
import TableSvc from '../../components/table/tableSvc'
import Page from '../../components/template/Page'

export default function service() {
 
  return (
    <Page title='Chamados'>
       <TableSvc  />
      <div className='flex justify-end pt-2 gap-4'>
      <BackButton />
      </div>
    </Page>
  )
}
