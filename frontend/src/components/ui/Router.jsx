import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Auth from "../pages/auth/Auth";
import Comands from "../pages/comands/Comands";
import Tournaments from "../pages/tournaments/Tournaments";
import Profile from "../pages/profile/Profile";
import Tournament from "../pages/tournament/Tournament";
import Comand from "../pages/comand/Comand";
import TournamentsSettings from "../pages/tournamentSettings/TournamentSettings";
import ErrorPage from "../pages/errorPage/ErrorPage";


const publicRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/auth",
        element: <Auth />
    },
    {
        path: "/comands",
        element: <Comands />
    },
    {
        path: "/tournaments",
        element: <Tournaments />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/tournaments/:id",
        element: <Tournament />
    },
    {
        path: "/comands/:id",
        element: <Comand />
    }
];
const privateRoutes = [
    {
        path: "/tournaments/:id/settings",
        element: <TournamentsSettings />
    }
]

export default function Router() {
    const user = true;

    return user ? (
        <Routes>
            {privateRoutes.map(({ path, element }) => {
                return <Route key={path} path={path} element={element} />;
            })}
            {publicRoutes.map(({ path, element }) => {
                return <Route key={path} path={path} element={element} />;
            })}
            <Route key={"/error"} path="/*" element={<ErrorPage />} />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map(({ path, element }) => {
                return <Route key={path} path={path} element={element} />;
            })}
            <Route key={"/error"} path="/*" element={<ErrorPage />} />
        </Routes>
    );
}