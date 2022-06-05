import { parseCookies } from 'nookies'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { alterService, doneService } from '../../services/svc'
import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router';


export default function Modal({title, setOpen, type, id, ogDate} : {title: string, setOpen: any, type: number | null, id:any, ogDate:any}) {
  const cookies = parseCookies()
  const cpf = cookies.cpf
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

  function handleSave() {
    if (type === 0) {
      doneService(id).then(response => {
      if(response.success == true){
        toast.success('serviço finalizado com sucesso')
        setOpen(false)
        Router.push('/service')
      }else {
        toast.error('erro ao finalizar serviço')
        setOpen(false)
      }
      })
    }
    else {
      alterService(cpf,ogDate,date,id,description).then(response => {
        if(response.success == true){
          toast.success('Pedido de alteração de data realizado com sucesso')
          setOpen(false)
        }else {
          toast.error('erro ao enviar o pedido')
          setOpen(false)
        }
      })
    }
  }
  return (
    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
       <div className='relative w-auto my-6 mx-auto max-w-3xl'>
       <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-4'>
        <span className='flex justify-center font-bold'>{title}</span>
        {
        type == 1 ? <>
        <textarea className='resize-none mt-2 placeholder:p-2 border-2 border-black' cols={30} rows={4} 
        placeholder={"Motivo"} onChange={e=>{setDescription(e.currentTarget.value)}}/>
        <input type="date" className='mt-2' onChange={e=>{setDate(e.currentTarget.value)}} /> 
        </>: null
        }
        <div className='flex justify-between mt-4 gap-2'>
            <button className='bg-white text-black border-2 border-black font-bold py-2 px-4 rounded-lg 
            hover:opacity-70 focus:outline-none focus:shadow-outline' onClick={()=>setOpen(false)}>Fechar</button>
            <button className='bg-black text-white font-bold py-2 px-4 rounded-lg
             hover:bg-gray-400 focus:outline-none focus:shadow-outline' onClick={()=>handleSave()}>Enviar</button>
        </div>
       </div>
       </div>
       
       <ToastContainer />
    </div>
  )
}
