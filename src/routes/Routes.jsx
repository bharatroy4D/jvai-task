import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Toper from "../Pages/Dashboaard/Toper/Toper";
import RealChat from "../Pages/Dashboaard/RealChat/RealChat";
import ManageSubcrib from "../Pages/Dashboaard/ManageSubcrib/ManageSubcrib";
import Users from "../Pages/Dashboaard/Users/User";
import HelpSupportForm from "../Pages/Dashboaard/Help&Support/Help&Support";
import FAQ from "../Pages/Dashboaard/FAQ/FAQ";
import Otp from "../Components/Otp/Otp";

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
       path: "/otp",
       element: <Otp />
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
                path: 'realChat',
                element: <RealChat />
            },
            {
                path: 'manage',
                element: <ManageSubcrib />
            },
            {
                path: 'users',
                element: <Users />
            },
            {
                path: 'helpSupport',
                element: <HelpSupportForm />
            },
            {
                path: 'faq',
                element: <FAQ />
            },
        ]
    }

]);