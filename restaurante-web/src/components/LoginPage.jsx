import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { useContext, useEffect, useState } from 'react';
import Header from './Header';
import useTheme from '../hook/useTheme'

export default function LoginPage() {

    
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleClick = (event) => {
        event.preventDefault();
        login();
        navigate('/inicio');
    }

    const { theme } = useTheme()

    return(
        <>
        <div className={`${theme} `}>
            <Header icon>
            </Header>
            <div className={`flex h-screen justify-center items-center dark:bg-gray-800`} >
                <div className="w-96 h-96 bg-white dark:bg-gray-900 rounded-lg shadow-lg flex flex-col items-center justify-center p-4">
                    <h1 className="text-3xl font-bold text-blue-900 dark:text-gray-200">Iniciar Sesión</h1>
                    <form className="w-full mt-4" onSubmit={handleClick}>
                        <input type="text" placeholder="Usuario" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-500 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                        <input type="password" placeholder="Contraseña" className="w-full mt-4 px-3 py-2 border border-gray-300 dark:border-gray-500 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                        <button  type="submit" className="w-full mt-4 bg-blue-900 dark:bg-gray-400 dark:font-semibold text-white py-2 rounded-md hover:bg-blue-800">Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}