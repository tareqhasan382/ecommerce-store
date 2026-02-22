import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import NotFound from "../pages/NotFound";
import ProductPage from "../pages/ProductPage";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: (
                    <App />
                ),
            },
            {
                path: "/details/:id",
                element: (

                    <ProductPage />

                ),
            },
            {
                path: "/cart",
                element: (

                    <Cart />

                ),
            },
            {
                path: "/login",
                element: (

                    <Login />

                ),
            },
            {
                path: "/signup",
                element: (

                    <Signup />

                ),
            },

            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);
export default routes;