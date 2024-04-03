import { Bolt, CircleHelp } from "lucide-react"

export default function Sidebar ({children}) {
    return(
            <aside className="h-screen fixed w-64">
                <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                    <div className="p-4 py-10 flex justify-center items-center border-b">
                        <h1 className="w-32 text-4xl text-center text-blue-900 font-bold">PRUEBA</h1>
                    </div>
                    <ul className="flex-1 px-3 pt-10">{children}</ul>

                    <div className="border-t flex flex-col px-3">
                        <SidebarItem icon={<Bolt size={20}/>} text="Ajustes" />
                        <SidebarItem icon={<CircleHelp size={20}/>} text="Ayuda" />
                    </div>
                </nav>

            </aside>
    )
}

export function SidebarItem({icon, text, active, onClick}){
    return(
        <li className={`list-none relative flex items-center py-3 px-3 my-1 pl-9 font-medium rounded-md cursor-pointer
        transition-colors group ${active ? "bg-gradient-to-tr from-blue-100 to-indigo-100 text-blue-600" : 
        "hover:bg-blue-50 text-gray-700"}`} onClick={onClick}
        >
            {icon}
            <span className="w-40 ml-3">{text}</span>
        </li>
    )
}