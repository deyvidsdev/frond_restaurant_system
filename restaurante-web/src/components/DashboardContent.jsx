import SimpleBarChart from "../view/SimpleBarChart"
import Header from "./Header"
export default function DashboardContent() {
    return(
        <>
            <Header text2="Pages / " text="Dashboard" icon>
            </Header>
            <div className="grid grid-cols-2 w-full mt-10 ">
                <SimpleBarChart/>
            </div>
        </>
    )
}