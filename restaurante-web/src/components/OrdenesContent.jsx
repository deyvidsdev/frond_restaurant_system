import Header from "./Header";
import Main from "./Main";
import DataTableOrdenes from "../view/DataTableOrdenes";

export default function OrdenesContent() {
    return(
        <>
            <Header text="Ordenes" icon>
            </Header>
            <Main>
                <DataTableOrdenes></DataTableOrdenes>
            </Main>
        </>
    )
}