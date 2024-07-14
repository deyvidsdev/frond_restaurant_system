import SimpleBarChart from "../view/Dashboard/SimpleBarChart"
import SimpleBarChart2 from "../view/Dashboard/SimpleBarChart2"
import Header from "./Header"
import Main from "./Main"
import AreaCard from "../view/Dashboard/AreaCard"


export default function DashboardContent() {
    return(
        <>
            <Header text2="Pages / " text="Dashboard" icon>
            </Header>
            <Main>
                <div className="flex flex-col gap-y-10">
                    <div className="grid grid-cols-3 gap-x-6">
                        <AreaCard text1="Ventas de hoy" text2="32">
                        </AreaCard>
                        <AreaCard text1="Ingresos de hoy" text2="S/.1200" text3="Disponibles">
                        </AreaCard>
                        <AreaCard text1="Egresos de hoy" text2="S/.500" text3="Disponibles">
                        </AreaCard>
                    </div>
                    <div className="grid grid-cols-2 gap-x-10">
                        <SimpleBarChart/>
                        <SimpleBarChart2/>
                    </div>
                </div>
            </Main>
        </>
    )
}