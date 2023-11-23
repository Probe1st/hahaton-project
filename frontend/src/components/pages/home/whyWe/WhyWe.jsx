import Marker from "../../../ui/Marker";

export default function WhyWe() {
    return (
        <div className="space-y-16">
            <h2 className="text-center text-5xl">Почему вы должны выбрать именно нас?</h2>

            <div className="flex flex-col items-start w-3/5 mx-auto space-y-5 text-2xl">
                <div className="elem-list">
                    <Marker />
                    <p>Участники наших турниров могут наслаждаться отличным игровым оборудованием.</p>
                </div>

                <div className="elem-list">
                    <Marker />
                    <p>Надежной сетью и уютной обстановкой.</p>
                </div>
            </div>

            <div className="w-3/5 h-[38rem] mx-auto rounded-3xl set-bg-img" style={{ backgroundImage: `url(${window.env.URL_TO_MEDIA}images/i_2.png)`}}></div>
        </div>
    )
}