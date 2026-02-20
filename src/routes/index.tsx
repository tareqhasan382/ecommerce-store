import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import NotFound from "../pages/NotFound";
import ProductPage from "../pages/ProductPage";

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
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);
export default routes;