import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userRole, setUserRole] = useState(null)

    const login = (role) => {
        setIsAuthenticated(true)
        setUserRole(role)
    }

    const logout = () => {
        setIsAuthenticated(false)
    }

    return(
        <AuthContext.Provider value = {{ isAuthenticated, login, logout, userRole}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
