import './App.css'
import { ClipboardList, Coffee, Folder, LayoutDashboard, Pencil, ShoppingCart, Users } from "lucide-react"
import Sidebar, { SidebarItem } from './components/Sidebar'
import Ventas from './components/Ventas'
import MainContent from './components/MainContent'

function App() {

  return (
    <>
      <div className="flex">
        <Sidebar>
          <SidebarItem icon={<LayoutDashboard size={20}/>} text="Dashboard" active/>
          <SidebarItem icon={<ShoppingCart size={20}/>} text="Ventas" />
          <SidebarItem icon={<ClipboardList size={20}/>} text="Ordenes"/>
          <SidebarItem icon={<Folder size={20}/>} text="Categorias" />
          <SidebarItem icon={<Coffee size={20}/>} text="Insumos"/>
          <SidebarItem icon={<Users size={20}/>} text="Usarios"/>
          <SidebarItem icon={<Pencil size={20}/>} text="Salas"/>
        </Sidebar>
        <MainContent>
        </MainContent>
      </div>
    
    </>
  )
}

export default App
