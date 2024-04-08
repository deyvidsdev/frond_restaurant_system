import { flexRender, getCoreRowModel, useReactTable, getPaginationRowModel } from '@tanstack/react-table'
import { useState } from 'react'
import { defaultData } from '../utils/defaultData'
import { Pencil, Trash2, Info} from 'lucide-react'
import classNames from 'classnames'

export default function DataTable() {
    const [data, setData] = useState(defaultData)

    const columns = [
        {
            accessorKey: '  ',
            cell: () => (
                <input type="checkbox" />
            )
        },
        {
            accessorKey: 'name'
        },
        {
            accessorKey: 'description'
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
        

            <div className=' py-6 px-7 w-full flex flex-col rounded-lg overflow-hidden bg-white mx-10'>
                <table className='table-auto border border-gray-200 w-full ' >
                    <thead className='bg-white'>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id} className=' text-left'>
                                {headerGroup.headers.map((header, index) => (
                                    <th key={header.id} className={`pl-3 py-4 ${index === 0 ? 'w-10' : 'w-72'}`} >
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
                    <tbody className='bg-white'>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id} className='border border-gray-200'>
                                {row.getVisibleCells().map((cell, index) => (
                                    <td key={cell.id} className={`py-4 pl-3 ${index === row.getVisibleCells().length - 1  ? 'text-right pr-4 text-gray-500' : ''} `} >
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
                <div className='mt-4 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <button className='text-gray-600 py-1 px-2 rounded-lg 
                        border border-white hover:bg-gray-100 disabled:hover:bg-white'
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()} > 
                            {'<'}
                        </button>

                        {table.getPageOptions().map((value, key) => (
                            <button key={key} 
                            className={classNames({
                                "text-gray-600 py-1 px-2 rounded-lg border border-white hover:bg-gray-100 disabled:hover:border-white": true,
                                "bg-gray-200 border border-gray-200": value === table.getState().pagination.pageIndex
                            })}
                            onClick={() => table.setPageIndex(value)}>
                                {value + 1}
                            </button>
                        ))}

                        <button className='text-gray-600 py-1 px-2 rounded-lg 
                        border border-white hover:bg-gray-100 disabled:hover:bg-white'
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}> 
                            {'>'}
                        </button>
                    </div>
                </div>
            </div>
        
    )
}