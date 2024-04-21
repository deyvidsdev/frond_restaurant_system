import Header from "./Header";
import Main from "./Main";
import DataTableInsumos from "../view/DataTableInsumos";

export default function InsumosContent() {
    return (
        <>
            <Header text="Insumos" icon>
            </Header>
            <Main>
                <DataTableInsumos></DataTableInsumos>
            </Main>
        </>
    )
}