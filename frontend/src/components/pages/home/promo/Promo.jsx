import Marker from "../../../ui/Marker";


export default function Promo() {
    return (
        <div className="space-y-10">
            {/* first row */}
            <div className="promo-block">
                {/* left block */}
                <div>
                    <div>
                        <Marker />
                        <p>Мы площадка для киберспортивных <span className="text-red">турниров</span>.</p>
                    </div>

                    <div>
                        <Marker />
                        <p>Наша площадка предлагает современные <span className="text-red">технологии</span> и комфортные <span className="text-red">условия</span>.</p>
                    </div>
                </div>

                {/* right block */}
                <div className="w-[45%] rounded-3xl border border-rose-950 set-bg-img" style={{ backgroundImage: `url(${window.env.URL_TO_MEDIA}images/i_1.png)` }}></div>
            </div>

            {/* second row */}
            <div className="promo-block !flex-row-reverse">
                {/* left block */}
                <div>
                    <div>
                        <Marker />
                        <p>Мы <span className="text-red">гордимся</span> поддержкой различных дисциплин кибер спорта, начиная от популярных игр до самых инновационных.</p>
                    </div>

                    <div>
                        <Marker />
                        <p>Независимо от того, <span className="text-red">кем вы являетесь</span>, у нас найдется что-то интересное для каждого.</p>
                    </div>
                </div>

                {/* right block */}
                <div className="w-[45%] rounded-3xl border border-rose-950 set-bg-img" style={{ backgroundImage: `url(${window.env.URL_TO_MEDIA}images/scale_1200_1.png)` }}></div>
            </div>
        </div>
    )
}