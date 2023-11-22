import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex flex-row justify-evenly h-20 border">
      <Link to={"/"}>Home</Link>
      <Link to={"auth/"}>auth</Link>
      <Link to={"comands/"}>comands</Link>
      <Link to={"comands/1/"}>comands</Link>
      <Link to={"tournaments/"}>tournaments</Link>
      <Link to={"tournaments/1/"}>tournament</Link>
      <Link to={"tournaments/:id/settings/"}>TournamentsSettings</Link>
    </div>
  )
}