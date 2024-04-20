import { Moon, Sun } from "lucide-react";
import useTheme from "../hook/useTheme";
import { useState } from "react";

export default function Header({text, icon}) {
    const {toggleTheme} = useTheme() 
    const [isMoonIcon, setIsMoonIcon] = useState(false) 

    const handleClick = () => {
        toggleTheme()
        setIsMoonIcon(!isMoonIcon)
    }
    return(
        <header className="flex justify-between w-full pt-8 pl-12 pr-12 ">
            <div>
                <p className="text-sm text-indigo-700 dark:text-gray-300">Pages/{text}</p>
                <h2 className="text-3xl text-blue-800 font-semibold mt-1 dark:text-gray-300">{text}</h2>
            </div>
            <div >
            {icon && (isMoonIcon ? (
                    <Moon
                        size={40}
                        style={{
                            color:'#E5E7EB',
                            backgroundColor: '#1F2937',
                            borderRadius: '50%',
                            padding: '10px',
                            cursor: 'pointer',
                        }}
                        onClick={handleClick}
                        
                    />
                ) : (
                    <Sun
                        size={40}
                        style={{
                            backgroundColor: '#E5E7EB',
                            borderRadius: '50%',
                            padding: '10px',
                            cursor: 'pointer',
                        }}
                        onClick={handleClick}
                    />
                ))}
                </div>
        </header>
    )
}