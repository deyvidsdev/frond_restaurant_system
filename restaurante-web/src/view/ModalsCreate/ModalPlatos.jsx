import { useState } from 'react'

/* eslint-disable react/prop-types */
export default function Modal({ isOpen, onClose, onAddOrder}) {
  const [form, setForm] = useState({
    code: '',
    name: '',
    price: 0,
    categoryId: 0
  });

  //Estado para mensajes de error
  const [errorText, setErrorText] = useState('')

  const handleChange = (e) => {
    const value = (e.target.name === 'price' || e.target.name === 'categoryId') && e.target.value !== '' ? Number(e.target.value) : e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    setErrorText('')

    //Validar entradas vacias
    const isEmpty = Object.values(form).some(value => typeof value === 'string' && value.trim() === '');
    if (isEmpty) {
      setErrorText('Por favor llene todos los campos');
      return;
    }

    onAddOrder(form)
    setForm({
      code: '',
      name: '',
      price: 0,
      categoryId: 0
    })
  }

  if (!isOpen) {
      return null;
  }

  return (
    <div className="modal flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-700 bg-opacity-50 dark:bg-negro-claro dark:bg-opacity-50">
        <div className="modal-content bg-white rounded shadow-lg p-6 max-w-sm mx-auto">
            <h2 className="text-center mb-4 text-xl font-semibold dark:text-negro-claro">Añadir plato</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="code" value={form.code} onChange={handleChange} placeholder="Codigo" className="mb-2 p-2 w-full border rounded" />
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nombre" className="mb-2 p-2 w-full border rounded" />
              <input type="number" name="price" value={form.price || ''} onChange={handleChange} placeholder="Precio" className="mb-2 p-2 w-full border rounded" />
              <select name="categoryId" value={form.categoryId} onChange={handleChange} className="mb-2 p-2 w-full border rounded dark:text-negro-claro">
              <option value="">Categoria...</option>
                  <option value="1">Ensaladas</option>
                  <option value="2">Pastas</option>
                  <option value="3">Pizas</option>
                  <option value="4">Carnes</option>
                  <option value="5">Pescados y mariscos</option>
                  <option value="6">Hamburguesas</option>
                  <option value="7">Sándwiches</option>
                  <option value="8">Comida Asiática</option>
                  <option value="9">Comida Mexicana</option>
                  <option value="10">Comida Mediterránea</option>
                  <option value="11">Aguas Frescas</option>
                  <option value="12">Refrescos</option>
                  <option value="13">Cervezas Artesanales</option>
                  <option value="14">Vinos</option>
                  <option value="15">Cocteles</option>
                  <option value="16">Postres Caseros</option>
                  <option value="17">Helados</option>
                  <option value="18">Pasteles</option>
              </select>
              {errorText && <p className='text-red-700'>{errorText}</p>}
              <button type="submit" className="block w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4">Añadir</button>
            </form>
            <button onClick={onClose} className="block w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">Cerrar</button>
        </div>
    </div>
  );
}