import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import MesasPorPiso from "./MesasPorPiso";

export default function MesasContent() {
  const { pisoName } = useParams();
  const [mesas, setMesas] = useState([]);
  const [pisoId, setPisoId] = useState(null);

  useEffect(() => {
    // Obtener el ID del piso basado en el nombre del piso
    fetch(`https://backend-restaurante.deyvids.dev/api/v1/Room/List`)
      .then(response => response.json())
      .then(data => {
        const piso = data.results.find(p => p.name === pisoName);
        if (piso) {
          setPisoId(piso.id);
        }
      })
      .catch(error => console.error('Error al obtener los datos del piso', error));
  }, [pisoName]);

  useEffect(() => {
    if (pisoId) {
      fetch(`https://backend-restaurante.deyvids.dev/api/v1/Room/Table/${pisoId}`)
        .then(response => response.json())
        .then(data => setMesas(data.serviceTable))
        .catch(error => console.error('Error al obtener las mesas', error));
    }
  }, [pisoId]);

  return (
    <>
      <Header text="Mesas" icon></Header>
      <Main>
        <div className="w-11/12 mt-10">
          <div className="bg-white w-full pl-10 py-5 text-negro-claro text-3xl font-semibold rounded-2xl">Información de Mesas</div>
          <div className="w-full mt-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {mesas.length > 0 ? (
              mesas.map(mesa => (
                <MesasPorPiso
                  key={mesa.id}
                  text={mesa.name}
                  active={mesa.isOccupied}
                  mesas={[mesa]} 
                />
              ))
            ) : (
              <p>No hay mesas disponibles para este piso.</p>
            )}
          </div>
        </div>
      </Main>
    </>
  )
}