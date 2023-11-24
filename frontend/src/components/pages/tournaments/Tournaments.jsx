import ReasultOfSearch from "./ResultsOfSearch/ResultsOfSearch";
import Search from "./search/Search";

export default function Tournaments() {
    return (
        <div className="space-y-5">
            <Search />

            <ReasultOfSearch />
        </div>
    )
}