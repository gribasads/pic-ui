import { format, isValid } from 'date-fns'
import { parseISO } from 'date-fns/esm'
import React from 'react'


export default function BlockInfo({infos, title} : {infos: any, title: string}) {
  const [dataFormated, setDataFormated] = React.useState([])
    function transformData(){
      const data = infos.map(item => {
        if(item.label === 'Data do Serviço'){
          const date = parseISO(item.value)
          const newDate = format(date, 'dd/MM/yyyy')
          return {...item, value: newDate}
        }
        if(item.label === 'Status do Serviço'){
         if(item.value == 0) return {...item, value: 'Aberto'}
          if(item.value == 1) return {...item, value: 'Finalizado'}
        }
        return item
      })
      setDataFormated(data)
    }

    React.useEffect(() => {
      transformData()
    }
    , [infos])
  return (
    <div className='border-2 border-solid border-slate-600 p-4'>
     <span className='p-2s'>{title}</span>
     {
         dataFormated.map((info:any) => (
              <div key={info.id} className='pb-2'>
                    <span className='p-2'>{info?.label}</span>
                    <span>: </span>
                    <span>{info?.value }</span>
                </div>
            ))
     }
     
    </div>
  )
}
