import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import Modal from '../Modals/ModalPlatos';

function DataTablePlatos() {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickOpenModal = () => {
    setIsModalOpen(true);
  }

  {/*Listar platos*/}
  const fetchItems = useCallback(async (page) => {
    const response = await fetch(`http://184.174.35.90:8040/api/v1/Dish/List?page=${page}&size=${itemsPerPage}`);
    const data = await response.json();
    setData(data.results);
    setTotalPages(data.totalPages);
  },[itemsPerPage]);

  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage, fetchItems]);


  {/*Crear platos*/}
  const addOrder = async (newOrder) => {
    const response = await fetch('https://backend-restaurante.deyvids.dev/api/v1/Dish/Create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newOrder)
    });
  
    if (response.ok) {
      fetchItems(currentPage)
      console.log('Plato añadido correctamente:', newOrder)
    } 
  };

  
  {/*Eliminar platos*/}
  const deleteDish = async (id) => {
    const response = await fetch(`https://backend-restaurante.deyvids.dev/api/v1/Dish/Delete/${id}`, {
      method: 'DELETE',
    })
    if (response.ok) {
      fetchItems(currentPage)
    }
  }

  const handlePrev = () => {
    setCurrentPage(prevPage => prevPage > 0 ? prevPage - 1 : prevPage);
  };

  const handleNext = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  }

  const pageNumbers = Array.from({length: Math.min(totalPages, 5)}, (_, i) => i);


  return (
      
      <div className=' py-6 px-7 w-full flex flex-col rounded-lg overflow-hidden bg-white dark:bg-gris-oscuro dark:text-gray-200'>
        <div >
          <button className='bg-gray-300 text-gray-500 font-semibold px-3 py-2' onClick={handleClickOpenModal} >Añadir Plato</button>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddOrder={addOrder}/>
        </div>
        <table className='table-auto border border-gray-200 dark:border-gray-500 w-full'>
          <thead>
            <tr>
              <th className="pl-3 py-4 text-left pr-4">ID</th>
              <th className="pl-3 py-4 text-left pr-4">Codigo</th>
              <th className="pl-3 py-4 text-left pr-4">Nombre</th>
              <th className="pl-3 py-4 text-left pr-4">Precio</th>
              <th className="pl-3 py-4 text-left pr-4">Categoria</th>
              <th className="pl-3 py-4 text-left pr-4"> Descripcion</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className='border border-gray-200 dark:border-gray-500'>
                {Object.entries(row).map(([key, value], cellIndex) => {
                  const keyBase = `${rowIndex}-${cellIndex}`;
                  if (key === 'category') {
                    return (
                      <React.Fragment key={keyBase}>
                        <td key={`${keyBase}-name`} className="py-4 pl-3 pr-4 max-w-40 dark:text-gray-200">{value.name}</td>
                        <td key={`${keyBase}-desc`} className="py-4 pl-3 pr-4 max-w-40 dark:text-gray-200">{value.description}</td>
                      </React.Fragment>
                    );
                  } else {
                    return <td key={keyBase} className="py-4 pl-3 pr-4 max-w-40 dark:text-gray-200">{value}</td>;
                  }
                })}
                <td className=''>
                  <div className='flex justify-center'>
                    <button onClick={() => deleteDish(row.id)} className='bg-gray-300 text-gray-500 font-semibold px-3 py-2'>Borrar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='mt-4 flex items-center justify-center'>
          <button className='text-gray-600 dark:text-gray-300 py-1 px-2 rounded-lg 
                          border border-white dark:border-none hover:bg-gray-100 dark:hover:bg-gray-500 disabled:hover:bg-white' onClick={handlePrev} disabled={currentPage === 0}>{"<"}</button>
          {pageNumbers.map((num) => (
            <button className='text-gray-600 dark:text-gray-300 py-1 px-2 rounded-lg 
            border border-white dark:border-none hover:bg-gray-100 dark:hover:bg-gray-500 disabled:hover:bg-white' key={num} onClick={() => handlePageClick(num)} disabled={num === currentPage}>
              {num + 1}
            </button>
          ))}
          <button className='text-gray-600 dark:text-gray-300 py-1 px-2 rounded-lg 
                          border border-white dark:border-none hover:bg-gray-100 dark:hover:bg-gray-500 disabled:hover:bg-white' onClick={handleNext} disabled={currentPage >= totalPages - 1}>{">"}</button>
        </div>
      </div>
  );
}

export default DataTablePlatos;