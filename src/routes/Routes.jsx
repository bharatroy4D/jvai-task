import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Toper from "../Pages/Dashboaard/Toper/Toper";
import RealChat from "../Pages/Dashboaard/RealChat/RealChat";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    {
        path: '/signIn',
        element: <SignIn />
    },
    {
        path: '/signUp',
        element: <SignUp />
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'dashboard/toper',
                element: <Toper />
            },
            {
                path:'realChat',
                element:<RealChat/>
            }
        ]
    }

]);