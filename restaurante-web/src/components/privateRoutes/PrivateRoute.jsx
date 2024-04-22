import { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login', { replace: true, state: { from: location } })
        }
    }, [isAuthenticated, navigate, location])

    if (!isAuthenticated) {
        return null
    }

    return children
}

export default PrivateRoute