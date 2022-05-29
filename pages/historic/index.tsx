import React, { useEffect, useState } from 'react'
import BackButton from '../../components/Button/back'
import Table from '../../components/table'
import TableHst from '../../components/table/tableHst'
import Page from '../../components/template/Page'


export default function historic() {

  return (
    <Page title='Histórico'>
      
      <TableHst />
      <div className='flex justify-end pt-2 gap-4'>
      <BackButton />
      </div>
    </Page>
  )
}
