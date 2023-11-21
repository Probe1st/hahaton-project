import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Auth from "../pages/auth/Auth";
import Comands from "../pages/comands/Comands";
import Tournaments from "../pages/tournaments/Tournaments";
import Profile from "../pages/profile/Profile";
import Tournament from "../pages/tournament/Tournament";
import Comand from "../pages/comand/Comand";
import TournamentsSettings from "../pages/tournament_settings/TournamentsSettings";


const router = createBrowserRouter([
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
    },
    {
        path: "/tournaments/:id/settings",
        element: <TournamentsSettings />
    }
],{
    basename: "/"
});

export default function Router() {
    return <RouterProvider router={router} />
}