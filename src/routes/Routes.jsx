import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";

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
    }
]);