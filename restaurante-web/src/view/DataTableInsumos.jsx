import { flexRender, getCoreRowModel, useReactTable, getPaginationRowModel } from '@tanstack/react-table'
import { useState } from 'react'
import { defaultDataInsumos } from '../utils/defaultDataInsumos'
import { Pencil, Trash2, Info} from 'lucide-react'
import classNames from 'classnames'
import Modal from './ModalPlatos'

export default function DataTableInsumos() {
    const [data, setData] = useState(defaultDataInsumos)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleAddOrder = (order) => {
      setData(prevData => [...prevData, order])
    }

    const columns = [
        {
            accessorKey: '  ',
            cell: () => (
                <input type="checkbox" />
            )
        },
        {
            accessorKey: 'Nombre'
        },
        {
            accessorKey: 'Descripcion'
        },
        {
            accessorKey: 'Categoria'
        },
        {
            accessorKey: 'Codigo'
        },
        {
            accessorKey: 'Precio'
        },
        {
            accessorKey: ' ',
            cell: () => ( 
                <>
                    <button >
                        <Pencil size={20} />
                    </button>
                    <button className='ml-14'>
                        <Trash2 size={20} />
                    </button>
                    <button className='ml-14'>
                        <Info size={20} />
                    </button>
                </>
            )
        },
        
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })

    return (
        

            <div className=' py-6 px-7 w-full flex flex-col rounded-lg overflow-hidden bg-white dark:bg-gris-oscuro dark:text-gray-200'>
              <div>
                  <button className='bg-gray-300 px-3 py-1 mb-3 text-gray-600 font-semibold' onClick={() => setIsModalOpen(true)}>Añadir plato</button>
                  <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddOrder={handleAddOrder}/>
              </div>
                <table className='table-auto border border-gray-200 dark:border-gray-500 w-full ' >
                    <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id} className=' text-left'>
                                {headerGroup.headers.map((header, index) => (
                                    <th key={header.id} className={`pl-3 py-4 ${index === 0 ? 'w-10' : ''}`} >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )
                                        }  
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id} className='border border-gray-200 dark:border-gray-500'>
                                {row.getVisibleCells().map((cell, index) => (
                                    <td key={cell.id} className={`py-4 pl-3 ${index === row.getVisibleCells().length - 1  ? 'text-right pr-4 text-gray-500 dark:text-gray-200' : ''} `} >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='mt-4 flex items-center justify-center'>
                    <div className='flex items-center gap-2'>
                        <button className='text-gray-600 dark:text-gray-300 py-1 px-2 rounded-lg 
                        border border-white dark:border-none hover:bg-gray-100 dark:hover:bg-gray-500 disabled:hover:bg-white'
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()} > 
                            {'<'}
                        </button>

                        {table.getPageOptions().map((value, key) => (
                            <button key={key} 
                            className={classNames({
                                "text-gray-600 dark:text-gray-300 py-1 px-2 rounded-lg border border-white dark:border-none hover:bg-gray-100 dark:hover:bg-gray-500 disabled:hover:border-white": true,
                                "bg-gray-200 dark:bg-gray-500 border border-gray-200": value === table.getState().pagination.pageIndex
                            })}
                            onClick={() => table.setPageIndex(value)}>
                                {value + 1}
                            </button>
                        ))}

                        <button className='text-gray-600 dark:text-gray-300 py-1 px-2 rounded-lg 
                        border border-white dark:border-none hover:bg-gray-100 dark:hover:bg-gray-500 disabled:hover:bg-white'
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}> 
                            {'>'}
                        </button>
                    </div>
                </div>
            </div>
        
    )
}