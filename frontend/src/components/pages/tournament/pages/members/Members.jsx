

export default function Members({ members }) {
    return (
        <div className="grid grid-cols-4 gap-5 justify-items-center w-full">
            {members ? (
                members.map(e => <Member member={e} />)
            ) : (
                <p className="text-xl">Нет участников</p>
            )}
        </div>
    )
}

function Member({ member }) {
    return (
        <div className="flex flex-col items-center py-5 w-full bg-[#564141] rounded-xl">
            {member.name}
        </div>
    )
}