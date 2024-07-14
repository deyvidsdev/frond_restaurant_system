import { useState } from 'react'

/* eslint-disable react/prop-types */
export default function Modal({ isOpen, onClose, onAddOrder}) {
  const [form, setForm] = useState({
    code: '',
    name:'',
    description: ''
  });

  //Estado para mensajes de error
  const [errorText, setErrorText] = useState('')

  const handleChange = (e) => {
      const value = e.target.name === 'id' && e.target.value !== '' ? Number(e.target.value) : e.target.value;
      setForm({
          ...form,
          [e.target.name]: value,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    setErrorText('')

    //Validar entradas vacias
    const isEmpty = Object.values(form).some(value => value.trim() === '')
    if(isEmpty){
      setErrorText('Por favor llene todos los campos')
      return
    }
    onAddOrder(form)
    setForm({
      code: '',
      name:'',
      description: ''
    })
  }

  if (!isOpen) {
      return null;
  }

  return (
    <div className="modal flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-700 bg-opacity-50 dark:bg-negro-claro dark:bg-opacity-50">
        <div className="modal-content bg-white rounded shadow-lg p-6 max-w-sm mx-auto">
            <h2 className="text-center mb-4 text-xl font-semibold dark:text-negro-claro">Añadir categoria</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="code" value={form.code} onChange={handleChange} placeholder="Codigo" className="mb-2 p-2 w-full border rounded" />
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nombre" className="mb-2 p-2 w-full border rounded" />
              <textarea name="description" value={form.description} onChange={handleChange} placeholder="Descripción" className="mb-2 p-2 w-full border rounded" />
              {errorText && <p className='text-red-700'>{errorText}</p>}
              <button type="submit" className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Añadir</button>
            </form>
            <button onClick={onClose} className="block w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">Cerrar</button>
        </div>
    </div>
  );
}