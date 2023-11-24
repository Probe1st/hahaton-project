import { useEffect, useState } from "react";
import ReasultOfSearch from "./ResultsOfSearch/ResultsOfSearch";
import Search from "./search/Search";
import { TournamentService } from "../../services/tournament.service";

export default function Tournaments() {
    const [tournaments, setTournaments] = useState([]);

    // get all tournament
    useEffect(() => {
        async function get() {
            setTournaments(await TournamentService.getAll());
        }
        get()
    }, [])

    return (
        <div className="space-y-5">
            <Search />

            <ReasultOfSearch variables={{tournaments}} />
        </div>
    )
}