

export default function Table({ membersWithPrize }) {

    return (
        <div className="w-full">
            <h2 className="text-4xl">Рейтинг</h2>

            {/* table header */}
            <div className="flex flex-row justify-between text-2xl mb-3 mt-7 font-normal">
                <p>Участник</p>
                <p>Очки</p>
                <p>Награда</p>
            </div>

            <div className="space-y-5">
                {membersWithPrize ? (
                    membersWithPrize.map((e, i) => <Member member={e} key={i} />)
                ) : (
                    <p className="text-xl">Пока нет пользователей</p>
                )
            }
            </div>
        </div>
    )
}

function Member({ member }) {
    return (
        <div className={`flex flex-row justify-between px-5 py-2 rounded-xl bg-[#564141]`}>
            <p>{member.name}</p>
            <p>{member.score}</p>
            <p>{member.prize}</p>
        </div>
    )
}