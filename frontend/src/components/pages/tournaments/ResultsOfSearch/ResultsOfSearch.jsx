import { Link } from "react-router-dom"

export default function ReasultOfSearch({ tournaments }) {
    
    return (
        <div className="bg-[#231B1B] h-[calc(100vh-290px)] scroll-bar px-8 py-7 rounded-xl border border-white space-y-9 overflow-y-scroll">
            {tournaments.map(e => {
                const attr = e.attributes;
                const date = new Date(attr.Date)
                return (
                    <Link to={`/tournaments/${e.id}`} key={e.id} className="flex flex-row justify-between bg-[#97727270] rounded-xl border border-white px-14 py-10 text-2xl">
                        {/* left */}
                        <div className="space-y-10">
                            <p>{attr.Name}</p>
                            <p>Формат: {attr.format.data.attributes.Name}</p>
                        </div>

                        {/* right */}
                        <div className="space-y-10 text-right">
                            <p>Дата начала: {date.getDay()}.{date.getMonth()}.{date.getFullYear()}</p>
                            <p>Состояние: {attr.state.data.attributes.Name}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}