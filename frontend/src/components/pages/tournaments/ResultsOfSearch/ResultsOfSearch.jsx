import { Link } from "react-router-dom"

const tournaments = [
    {
        id: 1,
        name: "The best Battle Royale",
        format: "Онлайн",
        date: "24.11.2023",
        state: "Идет"
    },
    {
        id: 2,
        name: "Lan",
        format: "Онлайн",
        date: "15.05.2024",
        state: "Запланирован"
    },
    {
        id: 3,
        name: "Blast Premier",
        format: "Онлайн",
        date: "22.11.2023",
        state: "Прошел"
    },
]

export default function ReasultOfSearch() {
    return (
        <div className="bg-[#231B1B] h-[calc(100vh-290px)] scroll-bar px-8 py-7 rounded-xl border border-white space-y-9 overflow-y-scroll">
            {tournaments.map(e => {
                return (
                    <Link to={`/tournaments/${e.id}`} key={e.id} className="flex flex-row justify-between bg-[#97727270] rounded-xl border border-white px-14 py-10 text-2xl">
                        {/* left */}
                        <div className="space-y-10">
                            <p>{e.name}</p>
                            <p>Формат: {e.format}</p>
                        </div>

                        {/* right */}
                        <div className="space-y-10 text-right">
                            <p>Дата начала: {e.date}</p>
                            <p>Состояние: {e.state}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}