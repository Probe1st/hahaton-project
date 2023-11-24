import { useState } from "react"


export default function Comands() {
    const [comands, setComands] = useState([]);

    return (
        <div className="flex flex-row justify-between">
            {/* search */}
            <div className="bg-[#564141] border border-white w-1/4 py-3 px-6 rounded-xl ">
                <div className="space-y-3 w-full">
                    <p className="text-2xl">Введите название команды</p>
                    <input className=" w-full outline-none border border-white bg-[#564141] rounded-xl font-normal px-3 py-1" type="text" name="comands" id="name" placeholder="Команда" />
                </div>

                <div>
                    <button onClick={() => {setComands()}}>Найти</button>
                </div>
            </div>

            {/* comands */}
            <div className="bg-[#564141] border border-white w-2/3 py-3 px-6 rounded-xl"></div>
        </div>
    )
}