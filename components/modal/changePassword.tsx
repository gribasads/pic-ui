import i18n from '../../hook/i18n';
import React from 'react'
import {changePassword} from '../../services/profile'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    setOpen: (value: boolean) => void
    id : string
}
export default function ChangeModal(props: Props) {
    const { setOpen, id } = props
    const [password, setPassword] = React.useState('')

    function handleChangePassword() {
        changePassword(id,password).then(() => {
            setOpen(false)
            toast.success(i18n.t('profile.passwordChanged'))
        }
        )

    }

  return (
    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
       <div className='relative w-auto my-6 mx-auto max-w-3xl'>
       <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-4'>
        <span className='flex justify-center font-bold'>{i18n.t('profile.change')}</span>
        <input className='resize-none mt-2 placeholder:p-2 border-2 border-black rounded p-2' 
        placeholder={i18n.t('profile.changePassword')} onInput={e => setPassword(e.currentTarget.value)}/>
        
        <div className='flex justify-between mt-4'>
            <button className='bg-white text-black border-2 border-black font-bold py-2 px-4 rounded-lg 
            hover:opacity-70 focus:outline-none focus:shadow-outline' onClick={()=>setOpen(false)}>Fechar</button>
            <button className='bg-black text-white font-bold py-2 px-4 rounded-lg
             hover:bg-gray-400 focus:outline-none focus:shadow-outline' onClick={()=>handleChangePassword()}>Enviar</button>
        </div>
       </div>
       </div>
       
       <ToastContainer />
    </div>
  )
}
