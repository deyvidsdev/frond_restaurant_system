import { useEffect, useState } from 'react';

export default function ModalMesas({ isOpen, onClose }) {
  const [form, setForm] = useState({
    idMesero: '',
    quantity: '',
    dishId: 0
  });

  const [meseros, setMeseros] = useState([]);
  const [platos, setPlatos] = useState([]);
  const [errorText, setErrorText] = useState('');

  // Obtener lista de meseros
  useEffect(() => {
    fetch('https://backend-restaurante.deyvids.dev/api/v1/User/List')
      .then(response => response.json())
      .then(data => setMeseros(data.results))
      .catch(error => console.error('Error al obtener los meseros', error));
  }, []);

  // Obtener lista de platos
  useEffect(() => {
    fetch('https://backend-restaurante.deyvids.dev/api/v1/Dish/List')
      .then(response => response.json())
      .then(data => setPlatos(data.results))
      .catch(error => console.error('Error al obtener los platos', error));
  }, []);

  const handleChange = (e) => {
    const value = e.target.name === 'dishId' ? Number(e.target.value) : e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorText('');

    // Validar campos
    const isEmpty = Object.values(form).some(value => typeof value === 'string' && value.trim() === '');
    if (isEmpty) {
      setErrorText('Por favor llene todos los campos');
      return;
    }

    const orderData = {
      user_id: form.idMesero,
      orderDetail: [
        {
          dish_id: form.dishId,
          quantity: Number(form.quantity)
        }
      ]
    };

    // Enviar datos a la API
    fetch('https://backend-restaurante.deyvids.dev/api/v1/Order/Create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify(orderData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Order created:', data);
        // Limpiar formulario y cerrar modal
        setForm({
          idMesero: '',
          quantity: '',
          dishId: 0
        });
        onClose();
      })
      .catch(error => {
        console.error('Error al crear la orden', error);
        setErrorText('Error al crear la orden');
      });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-700 bg-opacity-50 dark:bg-negro-claro dark:bg-opacity-50">
      <div className="modal-content bg-white rounded shadow-lg p-6 max-w-sm mx-auto">
        <h2 className="text-center mb-4 text-xl font-semibold dark:text-negro-claro">Orden</h2>
        <form onSubmit={handleSubmit}>
          <select name="idMesero" value={form.idMesero} onChange={handleChange} className="mb-2 p-2 w-full border rounded dark:text-negro-claro">
            <option value="">Seleccione mesero</option>
            {meseros.map(mesero => (
              <option key={mesero.id} value={mesero.id}>{mesero.name}</option>
            ))}
          </select>
          <select name="dishId" value={form.dishId} onChange={handleChange} className="mb-2 p-2 w-full border rounded dark:text-negro-claro">
            <option value="">Seleccione plato</option>
            {platos.map(plato => (
              <option key={plato.id} value={plato.id}>{plato.name}</option>
            ))}
          </select>
          <input type="text" name="quantity" value={form.quantity} onChange={handleChange} placeholder="Cantidad" className="mb-2 p-2 w-full border rounded" />
          {errorText && <p className='text-red-700'>{errorText}</p>}
          <button type="submit" className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Añadir</button>
        </form>
        <button onClick={onClose} className="block w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">Cerrar</button>
      </div>
    </div>
  );
}
