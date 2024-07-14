import { useState } from 'react'

/* eslint-disable react/prop-types */
export default function Modal({ isOpen, onClose, onAddOrder}) {
  const [form, setForm] = useState({
      Plato: '',
      Cantidad: '',
      Descripcion: '',
      Mozo: '',
      Estado: '',
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
      Orden: '',
      Cantidad: '',
      Descripcion: '',
      Mozo: '',
      Estado: '',
    })
  }

  if (!isOpen) {
      return null;
  }

  return (
    <div className="modal flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-700 bg-opacity-50 dark:bg-negro-claro dark:bg-opacity-50">
        <div className="modal-content bg-white rounded shadow-lg p-6 max-w-sm mx-auto">
            <h2 className="text-center mb-4 text-xl font-semibold dark:text-negro-claro">Añadir orden</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="waiter" value={form.Orden} onChange={handleChange} placeholder="Orden" className="mb-2 p-2 w-full border rounded" />
                <input type="number" name="Cantidad" value={form.Cantidad || ''} onChange={handleChange} placeholder="Cantidad" className="mb-2 p-2 w-full border rounded" />
                <textarea name="Descripcion" value={form.Descripcion} onChange={handleChange} placeholder="Descripción" className="mb-2 p-2 w-full border rounded" />
                <input type="text" name="Mozo" value={form.Mozo} onChange={handleChange} placeholder="Mozo" className="mb-2 p-2 w-full border rounded" />
                <select name="Estado" value={form.Estado} onChange={handleChange} className="mb-2 p-2 w-full border rounded dark:text-negro-claro">
                    <option value="">Estado...</option>
                    <option value="wait">En espera</option>
                    <option value="active">Activo</option>
                </select>
                <button type="submit" className="block w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4">Añadir</button>
            </form>
            <button onClick={onClose} className="block w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">Cerrar</button>
        </div>
    </div>
  );
}