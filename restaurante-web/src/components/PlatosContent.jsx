import Header from "./Header";
import Main from "./Main";
import DataTablePlatos from "../view/DataTables/DataTablePlatos";

export default function PlatosContent() {
  return (
    <>
      <Header text2="Pages / " text="Platos" icon>
      </Header>
      <Main>
        <DataTablePlatos></DataTablePlatos>
      </Main>
    </>
  )
}