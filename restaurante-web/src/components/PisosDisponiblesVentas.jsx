import { useNavigate } from "react-router-dom";
export default function PisosDisponiblesVentas({text, active, handleContentClick}) {

    const navigate = useNavigate()

    const handleClick = () => {
        console.log("llamado")
        handleContentClick('Mesas')
    }


    return(
        <>
            <div className="flex flex-col w-52 h-56 items-center justify-center bg-white rounded-3xl cursor-pointer" onClick={handleClick}>
                <span className="w-24 h-16 bg-orange-400 mt-6 rounded-lg"></span>
                <p className="py-3 text-sm font-semibold">{text}</p>
                <span className={`h-5 mb-9 px-1 text-center text-xs font-bold rounded-lg  ${active ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                    {active ? "Active" : "Inactive"}
                </span>
            </div>
        </>
    )
}