import DataTableCategorias from "../view/DataTableCategorias";
import Header from "./Header";
import Main from "./Main";

export default function CategoriasContent() {  
    return (
        <>
            <Header text="Categorias" icon>
            </Header>
            <Main>
                <DataTableCategorias></DataTableCategorias>
            </Main>
        </>
    )
}