import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { useState, useContext } from 'react';
import Header from './Header';
import useTheme from '../hook/useTheme'

export default function LoginPage() {

  const [username,setUsername] = useState('')
  const [errorText, setErrorText] = useState('')

  const userRoles = {
      admin: 'admin',
      mesero1: 'waiter'
  }

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleClick = (event) => {
      event.preventDefault();

      setErrorText('')


      const role = userRoles[username]
      if(role){
        login(role);
        if(role === 'admin') {
          navigate('/dashboard')
        }else if(role === 'waiter') {
          navigate('/ventas')
        }
      }else {
        const isEmpty = username.trim() === ''
        if(isEmpty){
          setErrorText('Por favor rellene todos los campos')
          return
        }else if(role !== 'admin' || role !== 'mesero1'){
          setErrorText('Nombre de usuario no valido')
          return
        }
      }

  }

  const { theme } = useTheme()

  return(
      <>
      <div className={`${theme} h-screen flex flex-col`}>
          <Header icon>
          </Header>
          <div className={`flex flex-grow justify-center items-center dark:bg-negro-claro`} >
              <div className="w-96 h-96 bg-white dark:bg-negro-claro rounded-lg shadow-lg flex flex-col items-center justify-center p-4 ">
                  <h1 className="text-3xl font-bold text-blue-900 dark:text-white mb-10">Central Panel</h1>
                  <form className="w-full mt-4" onSubmit={handleClick}>
                      <input type="text" placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)} className="w-full px-3 py-2  border border-gray-300 dark:border-gray-500 dark:bg-negro-claro rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 dark:focus:ring-white focus:border-transparent dark:text-white"/>
                      <input type="password" placeholder="Contraseña" className="w-full mt-4 px-3 py-2 border border-gray-300 dark:border-gray-500 dark:bg-negro-claro rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 dark:focus:ring-white focus:border-transparent dark:text-white"/>
                      {errorText && <p className='text-red-700'>{errorText}</p>}
                      <button  type="submit" className="w-full mt-10 bg-blue-900 dark:bg-blue-600 dark:font-semibold text-white py-2 rounded-md hover:bg-blue-800">Iniciar Sesión</button>
                  </form>
              </div>
          </div>
      </div>
      </>
  )
}