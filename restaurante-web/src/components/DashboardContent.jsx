import SimpleBarChart from "../view/SimpleBarChart"
import Header from "./Header"
import Main from "./Main"
export default function DashboardContent() {
    return(
        <>
            <Header text="Dashboard" icon>
            </Header>
            <div className="grid grid-cols-2 w-full ">
                <SimpleBarChart/>
                <SimpleBarChart/>
                <SimpleBarChart/>
                <SimpleBarChart/>
            </div>
        </>
    )
}