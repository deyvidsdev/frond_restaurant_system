import Header from "./Header";
import Main from "./Main";
import DataTableInsumos from "../view/DataTableInsumos";

export default function InsumosContent() {
    return (
        <>
            <Header text2="Pages / " text="Platos" icon>
            </Header>
            <Main>
                <DataTableInsumos></DataTableInsumos>
            </Main>
        </>
    )
}