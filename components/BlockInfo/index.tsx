import React from 'react'

export default function BlockInfo({infos, title} : {infos: any, title: string}) {
    
  return (
    <div className='border-2 border-solid border-slate-600 p-4'>
     <span className='p-2s'>{title}</span>
     {
         infos.map((info:any) => (
              <div key={info.id} className='pb-2'>
                    <span className='p-2'>{info.label}</span>
                    <span>:</span>
                    <span>{info.value}</span>
                </div>
            ))
     }
    </div>
  )
}
