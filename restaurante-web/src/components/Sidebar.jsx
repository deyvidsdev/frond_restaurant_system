import { Bolt, CircleHelp, ChevronFirst, ChevronLast } from "lucide-react"
import { createContext, useState, useContext } from "react"

const SidebarContext = createContext();


export default function Sidebar ({children}) {
    const [expanded, setExpanded] = useState(true)

    return(
            <aside className="h-screen sticky top-0">
                <nav className="h-full flex flex-col bg-white dark:bg-gray-800 border-r dark:border-gray-700 shadow-sm">
                    <div className={`px-5 py-10 flex items-center border-b dark:border-gray-700 ${expanded ? "justify-between" : "justify-start"}`}>
                        <h1 className={`text-2xl text-center text-blue-900 dark:text-gray-200 font-bold overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}>Central</h1>
                        <button onClick={() => setExpanded((curr) => !curr)} className="bg-gray-100 py-1 px-0.5 rounded-md">
                            {expanded ? <ChevronFirst/>  : <ChevronLast/>}
                        </button>
                    </div>

                    <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3 pt-10 mr-4">{children}</ul>
                    </SidebarContext.Provider>

                    <div className="border-t dark:border-gray-700 flex flex-col px-3">
                    <SidebarContext.Provider value={{ expanded }}>
                        <SidebarItem icon={<Bolt size={20}/>} text="Ajustes" />
                        <SidebarItem icon={<CircleHelp size={20}/>} text="Ayuda" />
                    </SidebarContext.Provider>
                    </div>
                </nav>

            </aside>
    )
}

export function SidebarItem({icon, text, active, onClick}){
    const {expanded} = useContext(SidebarContext);
    return(
        <li className={`list-none relative flex items-center py-3 px-3 my-1 pl-3 font-medium rounded-md cursor-pointer
        transition-colors group ${active ? "bg-indigo-100 dark:bg-gray-600 text-blue-600 dark:text-gray-200 " : 
        "hover:bg-blue-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"}`} onClick={onClick}
        >
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-40 ml-3" : "w-0"}`}>{text}</span>
            {!expanded && (
                <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm 
                invisible group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
                    {text}
                </div>
            )}
        </li>
    )
}