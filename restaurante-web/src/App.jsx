import './App.css'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import MainApp from './components/MainApp'
import PrivateRoute from './components/privateRoutes/PrivateRoute'
import AuthProvider from './context/AuthProvider'

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/inicio" element={<PrivateRoute><MainApp/></PrivateRoute>}/>
        </Routes>
      </Router> 
    </AuthProvider>
  )
}

export default App
