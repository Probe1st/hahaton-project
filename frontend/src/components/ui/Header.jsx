import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center mb-20 font-semibold">
      {/* logo */}
      <Link to={"/"} className="w-12 h-12 bg-red-600"></Link>

      {/* nav */}
      <nav className="flex flex-row justify-between space-x-7">
        <Link to={"/tournaments"}>Турниры</Link>
        <Link to={'/comands'}>Команды</Link>
        
      </nav>

      {/* sign in link */}
      <div>
        <Link className="bg-[#921515] px-6 py-2 rounded-full" to={"/auth"}>Войти</Link>
      </div>
    </header>
  )
}