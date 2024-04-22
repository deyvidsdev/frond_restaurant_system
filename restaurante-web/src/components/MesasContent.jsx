import Header from "./Header";
import Main from "./Main";
import MesasDisponibles from "./MesasDisponibles";

export default function MesasContent() {
    

    return (
        <>
            <Header text="Mesas" icon>
            </Header>
            <Main>
                <div className="w-11/12 mt-10">
                    <div className="bg-white w-full pl-10 py-5 text-blue-900 text-3xl font-semibold rounded-2xl">Información de Mesas</div>
                        <div className="w-full mt-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                            <MesasDisponibles text="Mesa 1" active ></MesasDisponibles>
                            <MesasDisponibles text="Mesa 2" active ></MesasDisponibles>
                            <MesasDisponibles text="Mesa 3" active ></MesasDisponibles>
                            <MesasDisponibles text="Mesa 4"  ></MesasDisponibles>
                            <MesasDisponibles text="Mesa 1" active ></MesasDisponibles>
                            <MesasDisponibles text="Mesa 2" active ></MesasDisponibles>
                            <MesasDisponibles text="Mesa 3" active ></MesasDisponibles>
                            <MesasDisponibles text="Mesa 4"  ></MesasDisponibles>
                        </div>
                </div>
            </Main>
        </>
    )
}