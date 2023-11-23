import { useState } from "react"

export default function Login({ changePage }) {
    const [data, setData] = useState({
        login: "",
        pass: ""
    });

    return (
        <div className="space-y-7">
            {/* form */}
            <div className="auth-form">
                <label>
                    <p>Никнейм или почта</p>
                    <input value={data.login} onChange={e => setData(prev => ({ ...prev, login: e.target.value }))} type="text" name="credential" id="login" />
                </label>
                <label>
                    <p>Пароль</p>
                    <input value={data.pass} onChange={e => setData(prev => ({ ...prev, pass: e.target.value }))} type="password" name="credential" id="pass" />
                </label>

                {/* sign in link */}
                <button onClick={() => console.log(data)} className="!mt-20 bg-[#921515] px-6 py-2 rounded-full" to={"/auth"}>Войти</button>
            </div>

            {/* invite to register */}
            <div className="flex flex-row justify-between bg-black px-10 py-8 rounded-2xl">
                <p>Впервые на нашем сайте?</p>
                <button onClick={() => changePage.setAuthPage(!changePage.authPage)} className="text-[#1255FF] hover:underline">Создать аккаунт</button>
            </div>
        </div>
    )
}