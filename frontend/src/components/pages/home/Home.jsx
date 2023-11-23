
function Marker() {
    return <img width={"40px"} src={"media/icons/Layer_x0020_1.svg"} alt="0" />
}

export default function Home() {

    return (
        <main className="flex flex-col">
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
                <div style={{ }}></div>
            </div>
        </main>
    )
}