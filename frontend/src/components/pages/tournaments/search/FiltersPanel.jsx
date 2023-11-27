
const filters = [
    {
        name: "Дата Турнира",
        options: [
            "Все время",
            "Прошли",
            "запланированы",
            "идут"
        ]
    },
    {
        name: "Турнирный взнос",
        options: [
            "Все турниры",
            "Бесплатные",
            "Платные"
        ]
    },
    {
        name: "Тип сетки",
        options: [
            "Single Elimination",
            "Battle Royale",
            "Dable Elimination"
        ]
    },
    {
        name: "Формат турнира",
        options: [
            "Все форматы",
            "Онлайн",
            "Офлайн"
        ]
    },
    {
        name: "Место проведения",
        options: [
            "Все города",
            "Москва",
            "Санкт-Петербург"
        ]
    },
    {
        name: "Сервер",
        options: [
            "Все сервера",
            "Альфа",
            "Бета"
        ]
    },
]

export default function FiltersPanel({ filterState }) {
    return (
        <>
            {filters.map(filter => {
                return (
                    <div key={filter.name} className="w-1/4 space-y-2">
                        <p className="text-xl text-[#FFFFFFBF]">{filter.name}</p>

                        <select
                            onChange={(event) => {
                                filterState.setFilters(prev => {
                                    const name = filter.name;
                                    return ({ 
                                        ...prev,
                                        name: event.target.value
                                    });
                                })
                            }}
                        style={{ backgroundImage: `url(${window.env.URL_TO_MEDIA}icons/arrow-down.svg)` }}
                        className="cursor-pointer outline-none px-5 py-2 w-full rounded-xl bg-[#566C7B] after:-mr-10 appearance-none bg-no-repeat bg-[center_right_0.5rem]"
                        name="filter"
                        id={filter.name}
                        >

                        {filter.options.map(option => {
                            return (
                                <option key={option} value={option}>{option}</option>
                            )
                        })}

                    </select>
                    </div >
                )
})}
        </>
    )
}