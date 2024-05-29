import Header from "./Header";
import Main from "./Main";
import DataTablePisos from "../view/DataTables/DataTablePisos";

export default function PisosContent() {  
    return (
        <>
            <Header text2="Pages / " text="Pisos" icon>
            </Header>
            <Main>
                <DataTablePisos>
                    
                </DataTablePisos>
            </Main>
        </>
    )
}