

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
                {membersWithPrize.map((e, i) => <Member member={e} index={i} />)}
            </div>
        </div>
    )
}

function Member({ member, index }) {
    return (
        <p>member</p>
    )
}