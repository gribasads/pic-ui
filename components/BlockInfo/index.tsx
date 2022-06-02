import { format, isValid } from 'date-fns'
import { parseISO } from 'date-fns/esm'
import React from 'react'


export default function BlockInfo({infos, title} : {infos: any, title: string}) {
    console.log(infos)
  return (
    <div className='border-2 border-solid border-slate-600 p-4'>
     <span className='p-2s'>{title}</span>
     {
         infos.map((info:any) => (
              <div key={info.id} className='pb-2'>
                    <span className='p-2'>{info.label}</span>
                    <span>: </span>
                    <span>{info.label == 'Data do Serviço' ? format(parseISO(info.value), 'dd/MM/yyyy'):info.value}</span>
                </div>
            ))
     }
     
    </div>
  )
}
