import React, { useEffect, useMemo, useState } from 'react'
import {useTable,usePagination,useSortBy} from 'react-table'
import { headers } from './headersSvc'
import { ArrowIconUp, ArrowIconDown, ArrowRight, ArrowLeft } from '../icons'
import { parseCookies } from 'nookies'
import { getService } from '../../services/svc'

export default function tableSvc() {
    const [dataTable, setDataTable] = useState([])
    const cookies = parseCookies()
  const cpf = cookies.cpf
    function getData() {
        getService(cpf).then(res => {
          return setDataTable(res.data)  
       })
      }
    
      useEffect(() => {
        getData()
      }, [])
    const data = useMemo (()=>[...dataTable],[dataTable])

    const columns = useMemo(() => headers, [])
    const tableInstance =
        useTable({ columns, data }, useSortBy,usePagination)
        
        const pagelength=()=>{
            if(pageOptions.length==0){
             return 1
           }else{
               return pageOptions.length
           }
         }

        
    const {
        getTableProps,
        headerGroups,
        getTableBodyProps,
        page,
        pageOptions,
        previousPage,
        canPreviousPage,
        nextPage,
        canNextPage,
        state,
        prepareRow } = tableInstance
        const { pageIndex } = state
       


  return (
    <div>
        <table {...getTableProps()} className={`min-w-full divide-y divide-gray-200 `}>
                <thead className={'bg-gray-100 '}>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()} >
                        {headerGroup.headers.map(column => (
                            <th className={'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider '}
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                            >
                                <span className="flex">
                                {column.render('Header')} 
                                    {column.isSorted ? (column.isSortedDesc ? ArrowIconUp(): ArrowIconDown()) : null}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                { 
                    page.length > 0 ? (
                <tbody {...getTableBodyProps()} className={'divide-y divide-gray-200'}>
                {page.map(row => {
                    prepareRow(row);
                    return (
                        
                        <tr {...row.getRowProps()} className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 `}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()} 
                                        style={{
                                            padding: '10px',
                                            paddingLeft: '23px'
                                        }}
                                        
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
                </tbody>
                        )
                        :
                        <tr  className={'bg-gray-200'}>
                            <td colSpan={7} className={'text-center p-4'}>
                                Nenhum registro encontrado
                            </td>
                        </tr>
                }
            </table>
            <div className={`pt-4`}>
                <span 
                    className={'pt-4'}>
                    Página{' '}
                    <strong>
                        {pageIndex + 1} de {pagelength()}
                    </strong>
                </span>
                <button 
                    className={`bg-black-550 rounded-md m-px float-right`}
                    onClick={(event) => {
                    event.preventDefault()
                    nextPage()
                }} disabled={!canNextPage}> {ArrowRight()}</button>
                <button
                    className={`bg-black-550 rounded-md m-px float-right`}
                    onClick={(event) => {
                    event.preventDefault()
                    previousPage()

                }} disabled={!canPreviousPage}> {ArrowLeft()}</button> 
                
            </div>   

    </div>
  )
}
