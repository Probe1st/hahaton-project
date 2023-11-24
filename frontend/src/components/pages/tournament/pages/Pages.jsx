import Comands from "./comands/Comands";
import Members from "./members/Members";
import Rools from "./rools/Rools";
import Table from "./table/Table";


export default function Pages({currentPage}) {
    return (
        <>
            {currentPage === "comands" && <Comands />}
            {currentPage === "rools" && <Rools />}
            {currentPage === "table" && <Table />}
            {currentPage === "members" && <Members />}
        </>
    )
}