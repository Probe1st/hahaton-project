import { useState } from "react";
import { publicRoutes } from "../../ui/Router";

export default function ErrorPage() {
    const [error, setError] = useState(null);

    const path = window.location.pathname;
    if (!publicRoutes.includes({ path: path })) {
        setError("404");
    }

    return (
        <div
            className="flex flex-col items-center justify-center mt-[30vh]"
        >
            {
                !error ? (
                    <h1>Error. Something went wrong</h1>
                ) : (
                    <p>Error: {error}</p>
                )
            }
        </div>
    )
}