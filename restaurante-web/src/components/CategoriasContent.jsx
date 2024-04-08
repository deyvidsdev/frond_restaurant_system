import DataTable from "../view/DataTable";
import Header from "./Header";
import Main from "./Main";

export default function CategoriasContent() {  
    return (
        <>
            <Header text="Categorias" icon>
            </Header>
            <Main>
                <DataTable></DataTable>
            </Main>
        </>
    )
}