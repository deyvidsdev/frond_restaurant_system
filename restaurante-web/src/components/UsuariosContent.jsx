import DataTableUsuarios from "../view/DataTables/DataTableUsuarios";
import Header from "./Header";
import Main from "./Main";

export default function UsuariosContent() {
    return(
        <>
            <Header text2="Pages / " text="Usuarios" icon>
            </Header>
            <Main>
                <DataTableUsuarios>
                  
                </DataTableUsuarios>
            </Main>
        </>
    )
}