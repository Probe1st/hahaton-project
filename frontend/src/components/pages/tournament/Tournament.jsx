import { Link, useParams } from "react-router-dom"
import PageChanger from "./pageChanger/PageChanger";
import { useEffect, useState } from "react"
import Pages from "./pages/Pages";
import { TournamentService } from "../../../services/tournament.service";

export default function Tournament() {
    const [page, setPage] = useState("comands")
    const { id } = useParams();
    const [tournament, setTournament] = useState({
        attributes: {
            Name: "",
            grid: "",
            members: [
                {
                    name: "",
                    score: "",
                    prize: "",
                }
            ],
            countMembers: "",
            organizer: "",
            Rules: ""
        },
        id: 0
    });

    useEffect(() => {
        async function getTournament() {
            setTournament(await TournamentService.getById(id))
        }
        getTournament();
    }, [id])

    return (
        <>
            {tournament ? (
                <div className="space-y-10">
                    {/* stats */}
                    <div className="flex flex-row justify-between">
                        <div className="text-2xl w-2/5 font-thin">
                            <h1 className="text-5xl mb-10">Турнир {tournament.attributes.Name}</h1>
                            <div className="space-y-5">
                                <p>Количество участников | {tournament.attributes.countMembers} |</p>
                                <p>Организаторы: {tournament.attributes.organizer}</p>
                                <p>Тип сетки: {tournament.attributes.grid}</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-3/12 space-y-5">
                            <Link className="bg-[#921515] w-full px-6 py-3 text-center text-4xl rounded-xl" to={"#"}>Учавствовать</Link>
                            <p className="text-2xl font-thin">Бесплатное участие</p>
                        </div>
                    </div>

                    <PageChanger page={{page, setPage}} />

                    <Pages rools={tournament.attributes.Rules} currentPage={page} members={tournament.attributes.members} />
                </div>
            ) : (
                <p>Турнир не найден</p>
            )}
        </>
    )
}