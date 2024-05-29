import { ClipboardList, Coffee, Folder, LayoutDashboard, Pencil, ShoppingCart, Users, Bolt, CircleHelp } from "lucide-react"
import Sidebar, { SidebarItem } from './Sidebar'
import DashboardContent from './DashboardContent'
import VentasContent from './VentasContent'
import OrdenesContent from './OrdenesContent'
import CategoriasContent from './CategoriasContent'
import PlatosContent from './PlatosContent'
import UsuariosContent from './UsuariosContent'
import PisosContent from './PisosContent'
import AjustesContent from './AjustesContent'
import AyudaContent from './AyudaContent'
import MesasContent from './MesasContent'
import { Routes, useNavigate, Route,Navigate, useLocation } from 'react-router-dom'
import useTheme from '../hook/useTheme'


export default function MainApp() {

    //Estado poner activo el elemento y cambiar el contenido
    const navigate = useNavigate()
    const location = useLocation()
    const { theme } = useTheme()

    const isActive = (path) => location.pathname === path

    return(
    <div className={`flex  ${theme}`}>
        <Sidebar>
        <SidebarItem icon={<LayoutDashboard size={20}/>} text="Dashboard" active={isActive("/dashboard")} onClick={() => navigate("/dashboard")}/>
        <SidebarItem icon={<ShoppingCart size={20}/>} text="Ventas" active={isActive("/ventas")} onClick={() => navigate("/ventas")}/>
        <SidebarItem icon={<ClipboardList size={20}/>} text="Ordenes" active={isActive("/ordenes")} onClick={() => navigate("/ordenes")}/>
        <SidebarItem icon={<Folder size={20}/>} text="Categorias" active={isActive("/categorias")} onClick={() => navigate("/categorias")}/>
        <SidebarItem icon={<Coffee size={20}/>} text="Platos" active={isActive("/platos")} onClick={() => navigate("/platos")}/>
        <SidebarItem icon={<Users size={20}/>} text="Usuarios" active={isActive("/usuarios")} onClick={() => navigate("/usuarios")}/>
        <SidebarItem icon={<Pencil size={20}/>} text="Pisos" active={isActive("/pisos")} onClick={() => navigate("/pisos")}/>
        <SidebarItem icon={<Bolt size={20}/>} text="Ajustes" active={isActive("/ajustes")} onClick={() => navigate("/ajustes")} />
        <SidebarItem icon={<CircleHelp size={20}/>} text="Ayuda" active={isActive("/ayuda")} onClick={() => navigate("/ayuda")}/>
        </Sidebar>
        <section className={`w-full min-h-screen bg-gray-50 dark:bg-negro-claro`}>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<DashboardContent/>} />
                <Route path="/ventas" element={<VentasContent/>} />
                <Route path="/ordenes" element={<OrdenesContent/>} />
                <Route path="/categorias" element={<CategoriasContent/>} />
                <Route path="/platos" element={<PlatosContent/>} />
                <Route path="/usuarios" element={<UsuariosContent/>} />
                <Route path="/pisos" element={<PisosContent/>} />
                <Route path="/ajustes" element={<AjustesContent/>} />
                <Route path="/ayuda" element={<AyudaContent/>} />
                <Route path="/mesas" element={<MesasContent/>} />
            </Routes>
        </section>
    </div>

    )
}