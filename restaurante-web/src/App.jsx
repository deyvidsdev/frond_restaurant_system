import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
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
          <Route path="/*" element={<PrivateRoute><MainApp/></PrivateRoute>}></Route>
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router> 
    </AuthProvider>
  )
}

export default App
