import { useEffect, useState } from "react"
import{ useNavigate } from "react-router-dom"
import Header from "./Header";
import Main from "./Main";
import PisosDisponiblesVentas from "./PisosDisponiblesVentas";

export default function VentasContent() {  

  const [pisos, setPisos] = useState([])
  

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://backend-restaurante.deyvids.dev/api/v1/Room/List`)
      .then(response => response.json())
      .then(data => setPisos(data.results))
      .catch(error => console.error('Error al obtener los datos', error))
  }, [])

  const handlePisoClick = (pisoId, pisoName) => {
    navigate(`/ventas/${pisoName}`)
  }

    return (
      <>
        <Header text2="Pages / " text="Ventas" icon></Header>
        <Main>
          <div className="w-11/12 mt-10">
            <div className="bg-white w-full pl-10 py-5 text-negro-claro text-3xl font-semibold rounded-2xl">Información de Salas</div>
            <div className="w-full mt-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {pisos.map(piso => (
                  <PisosDisponiblesVentas
                    key={piso.id} 
                    text={piso.name} 
                    active={piso.state} 
                    onClick={() => handlePisoClick(piso.id, piso.name)}
                    />
                ))}
            </div>
          </div>
        </Main>
      </>
    )
}