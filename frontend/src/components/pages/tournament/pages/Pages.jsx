import Comands from "./comands/Comands";
import Members from "./members/Members";
import Rools from "./rools/Rools";
import Table from "./table/Table";


export default function Pages({ currentPage, rools, members }) {
    return (
        <>
            {currentPage === "comands" && <Comands />}
            {currentPage === "rools" && <Rools rools={rools} />}
            {currentPage === "table" && <Table membersWithPrize={members} />}
            {currentPage === "members" && <Members members={members} />}
        </>
    )
}