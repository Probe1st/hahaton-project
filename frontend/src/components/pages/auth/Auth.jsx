import { useState } from "react"
import Login from "./login/Login";
import Register from "./register/Register";

export default function Auth() {
    const [authPage, setAuthPage] = useState(true);

    return (
        <div className="flex flex-row justify-center w-full">
            {
                authPage ? (
                    <Login changePage={{ authPage, setAuthPage }} />
                ) : (
                    <Register changePage={{ authPage, setAuthPage }} />
                )
            }
        </div>
    )
}