import DataTableCategorias from "../view/DataTables/DataTableCategorias";
import Header from "./Header";
import Main from "./Main";

export default function CategoriasContent() {  
    return (
        <>
            <Header text2="Pages / " text="Categorias" icon>
            </Header>
            <Main>
                <DataTableCategorias></DataTableCategorias>
            </Main>
        </>
    )
}