import {  useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ClipboardList, Coffee, Folder, LayoutDashboard, Pencil, ShoppingCart, ToggleLeft, Users, Bolt, CircleHelp } from "lucide-react"
import Sidebar, { SidebarItem } from './Sidebar'
import DashboardContent from './DashboardContent'
import VentasContent from './VentasContent'
import OrdenesContent from './OrdenesContent'
import CategoriasContent from './CategoriasContent'
import InsumosContent from './InsumosContent'
import UsuariosContent from './UsuariosContent'
import SalasContent from './SalasContent'
import AjustesContent from './AjustesContent'
import AyudaContent from './AyudaContent'
import MesasContent from './MesasContent'
import useTheme from '../hook/useTheme'


export default function MainApp() {

    //Estado poner activo el elemento y cambiar el contenido
    const [content, setContent] = useState("Dashboard")
    const handleContentClick = (text) => {
        if(text !== content) {
        setContent(text)
        }
    }

    const contentMap = {
        Dashboard: <DashboardContent/>,
        Ventas: <VentasContent handleContentClick={handleContentClick}/>,
        Ordenes: <OrdenesContent/>,
        Categorias: <CategoriasContent/>,
        Insumos: <InsumosContent/>,
        Usuarios: <UsuariosContent />,
        Salas: <SalasContent/>,
        Ajustes: <AjustesContent/>,
        Ayuda: <AyudaContent/>,
        Mesas: <MesasContent/>
    };

    

    const { theme } = useTheme()

    

    return(
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