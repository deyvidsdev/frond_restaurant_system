import ModalMesas from "../view/ModalPedidoMesa/ModalMesas"
import { useState } from "react"
export default function PisosDisponiblesVentas({text, isOccupied}) {

  const [isModalOpen, setIsModalOpen] = useState(false)


  const handleClickOpenModal = () => {
    setIsModalOpen(true)
  }

  
  return(
      <>
          <div className="flex flex-col w-52 h-56 items-center justify-center shadow-xl dark:bg-gradient-to-b from-gris-top-dashboard to-gris-bottom-dashboard rounded-xl cursor-pointer">
              <span className="w-24 h-16 bg-orange-400 mt-6 rounded-lg"></span>
              <p className="py-3 text-sm font-semibold text-white">{text}</p>
              <span className={`h-5 mb-9 px-1 text-center text-xs font-bold rounded-lg  ${isOccupied ? "bg-red-100 text-red-600" : " bg-green-100 text-green-600"}`}>
                  {isOccupied ? "Ocupado" : "Disponible"}
              </span>
                <button className="bg-blue-600 text-white font-semibold px-3 py-2 rounded-lg mb-4" onClick={handleClickOpenModal}>Atender</button>
                <ModalMesas isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
      </>
  )
}