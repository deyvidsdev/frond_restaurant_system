import './App.css'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'
import { BrowserRouter as Router, Route, Routes, useNavigate, Outlet, Navigate } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import MainApp from './components/MainApp'
import MesasContent from './components/MesasContent'
import PrivateRoute from './components/privateRoutes/PrivateRoute'
import AuthProvider from './context/AuthProvider'

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/inicio" element={<PrivateRoute><MainApp/></PrivateRoute>}></Route>
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router> 
    </AuthProvider>
  )
}

export default App
