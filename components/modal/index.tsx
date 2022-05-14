import React from 'react'


export default function Modal({title, setOpen, type} : {title: string, setOpen: any, type: number | null}) {
  return (
    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
       <div className='relative w-auto my-6 mx-auto max-w-3xl'>
       <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-4'>
        <span className='flex justify-center font-bold'>{title}</span>
        <textarea className='resize-none mt-2 placeholder:p-2 border-2 border-black' cols={30} rows={4} 
        placeholder={`${type == 0? "Serviço Realizados" : "Motivo"} `} />
        {
          type == 1 ? <input type="date" className='mt-2' /> : null
        }
        <div className='flex justify-between mt-4'>
            <button className='bg-white text-black border-2 border-black font-bold py-2 px-4 rounded-lg 
            hover:opacity-70 focus:outline-none focus:shadow-outline' onClick={()=>setOpen(false)}>Fechar</button>
            <button className='bg-black text-white font-bold py-2 px-4 rounded-lg
             hover:bg-gray-400 focus:outline-none focus:shadow-outline'>Enviar</button>
        </div>
       </div>
       </div>
       
       
    </div>
  )
}
