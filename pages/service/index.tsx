import React from 'react'
import BackButton from '../../components/Button/back'
import TableSvc from '../../components/table/tableSvc'
import Page from '../../components/template/Page'

export default function service() {
  const headers = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
  ]
  const data = [
    { id: 1, name: 'John Doe', email: 'gmail.com' },
    { id: 2, name: 'John Doe', email: 'gmail.com' },
    { id: 3, name: 'John Doe', email: 'gmail.com' },
  ]
  return (
    <Page title='Chamados'>
       <TableSvc data={data} headers={headers} />
      <div className='flex justify-end pt-2 gap-4'>
      <BackButton />
      </div>
    </Page>
  )
}
