
const tournaments = [
    {
        name: "The best Battle Royla",
        format: "Онлайн",
        date: "24.11.2023",
        state: "Идет"
    },
    {
        name: "Lan",
        format: "Онлайн",
        date: "15.05.2024",
        state: "Запланирован"
    },
    {
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
                    <div className="flex flex-row justify-between bg-[#97727270] rounded-xl border border-white px-14 py-10 text-2xl">
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
                    </div>
                )
            })}
        </div>
    )
}