import { useState } from 'react'

/* eslint-disable react/prop-types */
export default function Modal({ isOpen, onClose, onAddOrder}) {
  const [form, setForm] = useState({
    Nombre: '',
    Descripcion: '',
    Categoria: '',
    Codigo: '',
    Precio: ''
  });

  const handleChange = (e) => {
      const value = e.target.name === 'Cantidad' && e.target.value !== '' ? Number(e.target.value) : e.target.value;
      setForm({
          ...form,
          [e.target.name]: value,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddOrder(form)
    setForm({
      Nombre: '',
      Descripcion: '',
      Categoria: '',
      Codigo: '',
      Precio: ''
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
                <input type="text" name="Nombre" value={form.Nombre} onChange={handleChange} placeholder="Nombre" className="mb-2 p-2 w-full border rounded" />
                <textarea name="Descripcion" value={form.Descripcion} onChange={handleChange} placeholder="Descripción" className="mb-2 p-2 w-full border rounded" />
                <select name="Categoria" value={form.Categoria} onChange={handleChange} className="mb-2 p-2 w-full border rounded dark:text-negro-claro">
                    <option value="">Categoria...</option>
                    <option value="carnes">Carnes</option>
                    <option value="criollo">Criollo</option>
                </select>
                <input type="text" name="Codigo" value={form.Codigo} onChange={handleChange} placeholder="Codigo" className="mb-2 p-2 w-full border rounded" />
                <input type="number" name="Precio" value={form.Precio || ''} onChange={handleChange} placeholder="Precio" className="mb-2 p-2 w-full border rounded" />
                
                <button type="submit" className="block w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4">Añadir</button>
            </form>
            <button onClick={onClose} className="block w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">Cerrar</button>
        </div>
    </div>
  );
}