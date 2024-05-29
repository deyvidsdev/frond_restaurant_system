import { useState, useEffect,useCallback } from 'react';

function DataTableOrdenes() {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);


  const fetchItems = useCallback(async (page) => {
    const response = await fetch(`https://backend-restaurante.deyvids.dev/api/v1/Order/List?page=${page}&size=${itemsPerPage}`);
    const data = await response.json();
    setData(data.results);
    setTotalPages(data.totalPages);
  },[itemsPerPage]);

  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage, fetchItems]);


  const handlePrev = () => {
    setCurrentPage(prevPage => prevPage > 0 ? prevPage - 1 : prevPage);
  };

  const handleNext = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  }

  const pageNumbers = Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i);


  return (
    <div className=' py-6 px-7 w-full flex flex-col rounded-lg overflow-hidden bg-white dark:bg-gris-oscuro dark:text-gray-200'>
      <table className='table-auto border border-gray-200 dark:border-gray-500 w-full'>
        <thead>
          <tr>
            <th className="pl-3 py-4 text-left pr-4 w-10">ID</th>
            <th className="pl-3 py-4 text-left pr-4 w-10">Mozo</th>
            <th className="pl-3 py-4 text-left pr-4 w-10">Plato</th>
            <th className="pl-3 py-4 text-left pr-4 w-10">Precio</th>
            <th className="pl-3 py-4 text-left pr-4 w-10">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            row.orderDetails.map((detail, detailIndex) => {
              const keyBase = `${rowIndex}-${detailIndex}`;
              return (
                <tr key={keyBase} className='border border-gray-200 dark:border-gray-500'>
                  {detailIndex === 0 && <td rowSpan={row.orderDetails.length} className="py-4 pl-3 pr-4 max-w-40 dark:text-gray-200">{row.id}</td>}
                  {detailIndex === 0 && <td rowSpan={row.orderDetails.length} className="py-4 pl-3 pr-4 max-w-40 dark:text-gray-200">{row.waiter}</td>}
                  {Object.entries(detail).map(([key, value]) => (
                    <td key={`${keyBase}-${key}`} className="py-4 pl-3 pr-4 max-w-40 dark:text-gray-200">{value}</td>
                  ))}
                </tr>
              );
            })
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

export default DataTableOrdenes;