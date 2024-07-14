import { useState } from 'react'

/* eslint-disable react/prop-types */
export default function Modal({ isOpen, onClose, onAddOrder}) {
  const [form, setForm] = useState({
      name: '',
      email: '',
      password: '',
      phone: '',
      role: ''
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
    const isEmpty = Object.values(form).some(value => value.trim() === '')
    if(isEmpty){
      setErrorText('Por favor llene todos los campos')
      return
  }

    onAddOrder(form)
    setForm({
      name: '',
      email: '',
      password: '',
      phone: '',
      role: ''
    })
  }

  if (!isOpen) {
      return null;
  }

  return (
    <div className="modal flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-700 bg-opacity-50 dark:bg-negro-claro dark:bg-opacity-50">
        <div className="modal-content bg-white rounded shadow-lg p-6 max-w-sm mx-auto">
            <h2 className="text-center mb-4 text-xl font-semibold dark:text-negro-claro">Añadir usuario</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nombre" className="mb-2 p-2 w-full border rounded dark:text-negro-claro" />
              <input type="text" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="mb-2 p-2 w-full border rounded dark:text-negro-claro" />
              <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Contraseña" className="mb-2 p-2 w-full border rounded dark:text-negro-claro" />
              <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Telefono" className="mb-2 p-2 w-full border rounded dark:text-negro-claro" />
              <select name="role" value={form.role} onChange={handleChange} className="mb-2 p-2 w-full border rounded dark:text-negro-claro">
                  <option value="">Roles...</option>
                  <option value="ROLE_ADMINISTRATOR">ROLE_ADMINISTRATOR</option>
                  <option value="ROLE_WAITER">ROLE_WAITER</option>
              </select>
              {errorText && <p className='text-red-700'>{errorText}</p>}
              <button type="submit" className="block w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4">Añadir</button>
            </form>
            <button onClick={onClose} className="block w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">Cerrar</button>
        </div>
    </div>
  );
}