import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { useContext } from 'react';
import Header from './Header';
import useTheme from '../hook/useTheme'

export default function LoginPage() {

    
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleClick = (event) => {
        event.preventDefault();
        login();
        navigate('/dashboard');
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
                        <input type="text" placeholder="Usuario" className="w-full px-3 py-2  border border-gray-300 dark:border-gray-500 dark:bg-negro-claro rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 dark:focus:ring-white focus:border-transparent"/>
                        <input type="password" placeholder="Contraseña" className="w-full mt-4 px-3 py-2 border border-gray-300 dark:border-gray-500 dark:bg-negro-claro rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 dark:focus:ring-white focus:border-transparent"/>
                        <button  type="submit" className="w-full mt-10 bg-blue-900 dark:bg-blue-600 dark:font-semibold text-white py-2 rounded-md hover:bg-blue-800">Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}