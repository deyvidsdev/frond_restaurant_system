import './App.css'
import { createContext, useContext, useState, useEffect } from 'react'
import { ClipboardList, Coffee, Folder, LayoutDashboard, Pencil, ShoppingCart, ToggleLeft, Users, Bolt, CircleHelp } from "lucide-react"
import Sidebar, { SidebarItem } from './components/Sidebar'
import MainContent from './components/MainContent'
import DashboardContent from './components/DashboardContent'
import VentasContent from './components/VentasContent'
import OrdenesContent from './components/OrdenesContent'
import CategoriasContent from './components/CategoriasContent'
import InsumosContent from './components/InsumosContent'
import UsuariosContent from './components/UsuariosContent'
import SalasContent from './components/SalasContent'
import AjustesContent from './components/AjustesContent'
import AyudaContent from './components/AyudaContent'
import useTheme from './hook/useTheme'




function App() {

  //Estado poner activo el elemento y cambiar el contenido
  const [content, setContent] = useState("Ordenes")
  const contentMap = {
    Dashboard: <DashboardContent/>,
    Ventas: <VentasContent/>,
    Ordenes: <OrdenesContent/>,
    Categorias: <CategoriasContent/>,
    Insumos: <InsumosContent/>,
    Usuarios: <UsuariosContent />,
    Salas: <SalasContent/>,
    Ajustes: <AjustesContent/>,
    Ayuda: <AyudaContent/>
  };

  const handleContentClick = (text) => {
    if(text !== content) {
      setContent(text)
    }
  }

  const { theme } = useTheme()

  

  return (
    
      <div className={`flex  ${theme}`}>
        <Sidebar>
          <SidebarItem icon={<LayoutDashboard size={20}/>} text="Dashboard" active={content === "Dashboard"} onClick={() => handleContentClick("Dashboard")}/>
          <SidebarItem icon={<ShoppingCart size={20}/>} text="Ventas" active={content === "Ventas"} onClick={() => handleContentClick("Ventas")}/>
          <SidebarItem icon={<ClipboardList size={20}/>} text="Ordenes" active={content === "Ordenes"} onClick={() => handleContentClick("Ordenes")}/>
          <SidebarItem icon={<Folder size={20}/>} text="Categorias" active={content === "Categorias"} onClick={() => handleContentClick("Categorias")}/>
          <SidebarItem icon={<Coffee size={20}/>} text="Insumos" active={content === "Insumos"} onClick={() => handleContentClick("Insumos")}/>
          <SidebarItem icon={<Users size={20}/>} text="Usuarios" active={content === "Usuarios"} onClick={() => handleContentClick("Usuarios")}/>
          <SidebarItem icon={<Pencil size={20}/>} text="Salas" active={content === "Salas"} onClick={() => handleContentClick("Salas")}/>
          <SidebarItem icon={<Bolt size={20}/>} text="Ajustes" active={content === "Ajustes"} onClick={() => handleContentClick("Ajustes")} />
          <SidebarItem icon={<CircleHelp size={20}/>} text="Ayuda" active={content === "Ayuda"} onClick={() => handleContentClick("Ayuda")}/>
        </Sidebar>
        
        <section className={`w-full min-h-screen bg-gray-50 dark:bg-gray-800`}>
          {contentMap[content]}
        </section>
      </div>
    
    
  )
}

export default App
