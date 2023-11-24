import { useState } from "react";


export default function Register({ changePage }) {
    const [data, setData] = useState({
        nickname: "",
        email: "",
        pass: "",
        role: ""
    });

    return (
        <div className="space-y-7">
            {/* form */}
            <div className="auth-form">
                <label>
                    <p>Никнейм</p>
                    <input value={data.login} onChange={e => setData(prev => ({ ...prev, nickname: e.target.value }))} type="text" name="credential" id="nickname" />
                </label>

                <label>
                    <p>Почта</p>
                    <input value={data.login} onChange={e => setData(prev => ({ ...prev, email: e.target.value }))} type="email" name="credential" id="email" />
                </label>

                <label>
                    <p>Пароль</p>
                    <input value={data.pass} onChange={e => setData(prev => ({ ...prev, pass: e.target.value }))} type="password" name="credential" id="pass" />
                </label>

                <label>
                    <p>Ваша роль</p>
                    <select value={data.login} onChange={e => setData(prev => ({ ...prev, role: e.target.value }))} type="" name="credential" id="nickname" >
                        <option selected disabled>Выберите роль</option>
                        <option value={"gamer"}>игрок</option>
                        <option value="organizer">Организатор</option>
                    </select>
                </label>

                {/* sign in link */}
                <button onClick={() => console.log(data)} className="!mt-20 bg-[#921515] px-6 py-2 rounded-full" to={"/auth"}>Зарегистрироваться</button>
            </div>

            {/* invite to register */}
            <div className="flex flex-row justify-between bg-black px-10 py-8 rounded-2xl">
                <p>Уже есть аккаунт?</p>
                <button onClick={() => changePage.setAuthPage(!changePage.authPage)} className="text-[#1255FF] hover:underline">Войти в аккаунт</button>
            </div>
        </div>
    )
}