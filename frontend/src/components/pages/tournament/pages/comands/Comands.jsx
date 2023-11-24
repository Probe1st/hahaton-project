import { useState } from "react"
import { ComandsService } from "../../../../services/comands.service";


export default function Comands() {
    const [comands, setComands] = useState([]);
    const [searchComand, setSearchComand] = useState("");

    return (
        <div className="flex flex-row justify-between flex-grow">
            {/* search */}
            <div className="flex flex-col justify-between bg-[#564141] border border-white w-1/4 py-3 px-6 rounded-xl space-y-5">
                <div className="space-y-3 w-full">
                    <p className="text-2xl">Введите название команды</p>
                    <input value={searchComand} onChange={e => setSearchComand(e.target.value)} className=" w-full outline-none border border-white bg-[#564141] rounded-xl font-normal px-3 py-1" type="text" name="comands" id="name" placeholder="Названине команды" />
                </div>

                <button className="border border-white w-full rounded-xl py-3" onClick={async () => { setComands(await ComandsService.getByName(searchComand)) }}>Найти</button>
            </div>

            {/* comands */}
            <div className="bg-[#564141] border border-white w-2/3 p-6 rounded-xl">
                {comands.map(e => (
                    <div className="flex flex-row justify-between items-center w-full">
                        <p className="font-normal text-2xl">{e.name} | кол-во участников: {e.count}</p>

                        <button className="border border-white px-5 py-3">Попроситься</button>
                    </div>
                ))}
            </div>
        </div>
    )
}