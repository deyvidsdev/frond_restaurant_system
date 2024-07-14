import { useState, useEffect, useCallback } from 'react';
import Modal from '../ModalsCreate/ModalPisos'
import ModalUpdate from '../ModalsUpdate/ModalUpdatePisos'
import { Trash2, Pencil } from 'lucide-react'


function DataTablePisos() {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState(null);


  const fetchItems = useCallback(async (page) => {
    const response = await fetch(`https://backend-restaurante.deyvids.dev/api/v1/Room/List?page=${page}&size=${itemsPerPage}`);
    const data = await response.json();
    setData(data.results);
    setTotalPages(data.totalPages);
  },[itemsPerPage]);

  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage, fetchItems]);

  const addOrder = async (newOrder) => {
    const response = await fetch('https://backend-restaurante.deyvids.dev/api/v1/Room/Create', {
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

  /// Eliminar salas
  const deleteRoom = async (id) => {
    const response = await fetch(`https://backend-restaurante.deyvids.dev/api/v1/Room/Delete/${id}`,{
      method:'DELETE'
    })
    if (response.ok) {
      fetchItems(currentPage)
    }
  }

  // Actualizar salas
  const updateRoom = async (updateRoom) => {
    const { id, ...rest } = updateRoom;
    const response = await fetch(`https://backend-restaurante.deyvids.dev/api/v1/Room/Update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rest)
    });
    if (response.ok) {
      fetchItems(currentPage)
      setSelectedRoomId(null)
    }
  };


  const handlePrev = () => {
    setCurrentPage(prevPage => prevPage > 0 ? prevPage - 1 : prevPage);
  };

  const handleNext = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  }

  const handleClickOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleClickOpenModalUpdate = (id) => {
    setSelectedRoomId(id); // Establecer el ID de la categoría seleccionada para actualizar
  };

  const pageNumbers = Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i);


  return (
    <div className=' py-6 px-7 w-full flex flex-col rounded-lg overflow-hidden bg-white dark:bg-gris-oscuro dark:text-gray-200'>
      <div >
        <button className='bg-gray-300 text-gray-500 font-semibold px-3 py-2' onClick={handleClickOpenModal} >Añadir Piso</button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddOrder={addOrder}/>
      </div>
      <table className='table-auto border border-gray-200 dark:border-gray-500 w-full'>
        <thead>
          <tr>
            <th className="pl-3 py-4 text-left pr-4">ID</th>
            <th className="pl-3 py-4 text-left pr-4">Nombre</th>
            <th className="pl-3 py-4 text-left pr-4">Capacidad</th>
            <th className="pl-3 py-4 text-left pr-4">Estado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className='border border-gray-200 dark:border-gray-500'>
              {Object.entries(row).map(([, value], cellIndex) => {
                const keyBase = `${rowIndex}-${cellIndex}`;
                if(value === true) {
                  return <td key={keyBase} className="py-4 pl-3 pr-4 max-w-40 text-green-500 font-semibold dark:text-green-500 dark:font-semibold">Disponible</td>;
                }else if(value === false){
                  return <td key={keyBase} className="py-4 pl-3 pr-4 max-w-40 text-yellow-500 font-semibold dark:text-yellow-500 dark:font-semibold">Ocupado</td>;
                }else {
                  return <td key={keyBase} className="py-4 pl-3 pr-4 max-w-40 dark:text-gray-200">{value}</td>;
                }
              })}
              <td className=''>
                <div className='flex gap-x-6'>
                  <button onClick={() => deleteRoom(row.id)} className='text-gray-300 font-semibold px-3 py-2 hover:text-red-600'><Trash2 /></button>
                  <button onClick={() => handleClickOpenModalUpdate(row.id)} className='text-gray-300 font-semibold px-3 py-2 hover:text-yellow-600'><Pencil /></button>
                  {selectedRoomId === row.id && (
                    <ModalUpdate
                      isOpen={true}
                      onClose={() => setSelectedRoomId(null)}
                      onAddOrder={updateRoom}
                      categoryId={selectedRoomId}
                    />
                  )}
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

export default DataTablePisos;