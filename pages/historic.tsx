import React from 'react'
import Table from '../components/table'
import Page from '../components/template/Page'

export default function historic() {

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
    <Page title='Histórico'>
      <Table data={data} headers={headers}/> 
    </Page>
  )
}
