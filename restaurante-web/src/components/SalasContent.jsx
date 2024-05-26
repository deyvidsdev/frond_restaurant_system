import Header from "./Header";
import Main from "./Main";
import DataTableSalas from "../view/DataTableSalas";

export default function SalasContent() {  
    return (
        <>
            <Header text2="Pages / " text="Salas" icon>
            </Header>
            <Main>
                <DataTableSalas>
                    
                </DataTableSalas>
            </Main>
        </>
    )
}