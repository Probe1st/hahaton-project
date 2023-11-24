

export default function PageChanger({page}) {

    return (
        <div className="pageChangerBlock">
            <button onClick={() => page.setPage("comands")}>Команды</button>
            <button onClick={() => page.setPage("rools")}>Правила</button>
            <button onClick={() => page.setPage("table")}>Таблица лидеров</button>
            <button onClick={() => page.setPage("members")}>Участники</button>
        </div>
    )
}