import { Link, useParams } from "react-router-dom"
import PageChanger from "./pageChanger/PageChanger";
import {  useState } from "react"
import Pages from "./pages/Pages";

const tournaments = [
    {
        id: 1,
        name: "The best Battle Royale",
        format: "Онлайн",
        date: "24.11.2023",
        state: "Идет",
        members: 300,
        organizers: ["Some Organizer1", "Some Organizer2", "Some Organizer3"],
        gridType: "Single Elimination"
    },
    {
        id: 2,
        name: "Lan",
        format: "Онлайн",
        date: "15.05.2024",
        state: "Запланирован",
        members: 100,
        organizers: ["Some Organizer1", "Some Organizer2", "Some Organizer3"],
        gridType: "Battle Royale"
    },
    {
        id: 3,
        name: "Blast Premier",
        format: "Онлайн",
        date: "22.11.2023",
        state: "Прошел",
        members: 500,
        organizers: ["Some Organizer1", "Some Organizer2", "Some Organizer3"],
        gridType: "Dable Elimination"
    },
]

export default function Tournament() {
    const [page, setPage] = useState("comands")
    const { id } = useParams();
    const tournament = tournaments.find(elem => elem.id === +id);

    return (
        <>
            {tournament ? (
                <div className="space-y-10">
                    {/* stats */}
                    <div className="flex flex-row justify-between">
                        <div className="text-2xl w-2/5 font-thin">
                            <h1 className="text-5xl mb-10">Турнир {tournament.name}</h1>
                            <div className="space-y-5">
                                <p>Количество участников | {tournament.members}  |</p>
                                <p>Организаторы: {tournament.organizers.join(", ")}</p>
                                <p>Тип сетки: {tournament.gridType}</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-3/12 space-y-5">
                            <Link className="bg-[#921515] w-full px-6 py-3 text-center text-4xl rounded-xl" to={"#"}>Учавствовать</Link>
                            <p className="text-2xl font-thin">Бесплатное участие</p>
                        </div>
                    </div>

                    <PageChanger page={{page, setPage}} />

                    <Pages currentPage={page} />
                </div>
            ) : (
                <p>Турнир не найден</p>
            )}
        </>
    )
}