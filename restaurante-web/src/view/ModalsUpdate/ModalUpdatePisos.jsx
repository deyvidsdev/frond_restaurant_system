import { useState } from 'react'

/* eslint-disable react/prop-types */
export default function ModalUpdate({ isOpen, onClose, onAddOrder, categoryId}) {
  const [form, setForm] = useState({
    id: categoryId,
    name: '',
    capacity: '',
  });

  //Estado para mensajes de error
  const [errorText, setErrorText] = useState('')

  const handleChange = (e) => {
      const value = e.target.name === 'Cantidad' && e.target.value !== '' ? Number(e.target.value) : e.target.value;
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
      id: categoryId,
      name: '',
      capacity: '',
    })
  }

  if (!isOpen) {
      return null;
  }

  return (
    <div className="modal flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-700 bg-opacity-50 dark:bg-negro-claro dark:bg-opacity-50">
        <div className="modal-content bg-white rounded shadow-lg p-6 max-w-sm mx-auto">
            <h2 className="text-center mb-4 text-xl font-semibold dark:text-negro-claro">Actualizar sala</h2>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="id" value={form.id} />
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nombre" className="mb-2 p-2 w-full border rounded dark:text-negro-claro" />
              <input type="number" name="capacity" value={form.capacity || ''} onChange={handleChange} placeholder="Capacidad" className="mb-2 p-2 w-full border rounded dark:text-negro-claro" />
              <button type="submit" className="block w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4">Actualizar</button>
              {errorText && <p className='text-red-700'>{errorText}</p>}
            </form>
            <button onClick={onClose} className="block w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">Cerrar</button>
        </div>
    </div>
  );
}