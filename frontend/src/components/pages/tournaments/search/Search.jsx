import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import FiltersPanel from "./FiltersPanel";

export default function Search() {
    return (
        <div className="flex flex-row justify-between items-center px-5 py-2 rounded-xl border border-white bg-[#97727270]">
            <p className="text-3xl font-normal">Поиск турнира</p>

            {/* filters */}
            <Popover>
                <Popover.Button className={"w-10 h-10 outline-none set-bg-img"} style={{ backgroundImage: `url(${window.env.URL_TO_MEDIA}icons/filters.png)` }}></Popover.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1">

                    <Popover.Panel className={"absolute flex flex-wrap justify-between px-16 gap-x-36 gap-y-8 py-8 left-1/2 -translate-x-1/2 mt-7 border border-white bg-[#4f3d3d] w-5/6 rounded-xl"}>
                        <FiltersPanel />
                    </Popover.Panel>

                </Transition>
            </Popover>
        </div>
    )
}