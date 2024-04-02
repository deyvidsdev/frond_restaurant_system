import { Moon } from "lucide-react";

export default function Header({text, icon}) {
    return(
        <header className="flex justify-between w-full pt-8 pl-12 pr-12">
            <div>
                <p className="text-sm text-indigo-700">Pages/{text}</p>
                <h2 className="text-3xl text-blue-800 font-semibold mt-1">{text}</h2>
            </div>
            <div className="bg-gray-300 h-full p-3 rounded-lg cursor-pointer">
                {icon && <Moon size={30}/>}
            </div>
        </header>
    )
}