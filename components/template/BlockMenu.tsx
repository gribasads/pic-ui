import Link from 'next/link'
import React from 'react'



export default function BlockMenu(props:any) {
  return (
      <Link href={props.url} passHref >  
         <div className={`
                flex flex-col items-center justify-center
                border-2 border-black rounded-lg w-60 h-40 mr-10 mb-4
                hover:text-amber-400 hover:border-amber-400
                cursor-pointer 
            `}>
                {props.icon("h-10 w-20")}
                <span className={`
                    text-center
                `}>{props.label}</span>
            </div>
      </Link>
  )
}
