import { useRouter } from 'next/router'
import React from 'react'
import { IconEdit } from '../icons'

export default function TableSvc ({data, headers} : {data: any, headers: any}) {
    const router = useRouter()
  return (
    <>
        <table className="w-full">
            <thead className='border-2 bg-blue-200'>
                <tr>
                    {
                        headers.map((header: any) => {
                            return <th className='border-2' key={header.key}>{header.label}</th>
                        })
                    }
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                {
                    data.map((row: any) => {
                        return (
                            <tr key={row.id}>
                                {
                                    headers.map((header: any) => {
                                        return <td key={header.key}>{row[header.key]}</td>
                                    })
                                }
                                <td><button onClick={e=>{router.push({pathname:('/service/' + row.id), query:{svc:row.id}})}}>{IconEdit()}</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}
