import Promo from "./promo/Promo";
import WhyWe from "./whyWe/WhyWe";



export default function Home() {
    return (
        <main className="flex flex-col space-y-32">
            <Promo />

            <WhyWe />

            <p className="text-5xl text-center">Приглашаем <span className="text-red">вас</span> испытать неповторимые <span className="text-red">эмоции</span> и <span className="text-red">азарт</span> кибер спорта на нашей площадке, где каждый турнир превращается в <span className="text-red">захватывающее приключение</span>!</p>
        </main>
    )
}