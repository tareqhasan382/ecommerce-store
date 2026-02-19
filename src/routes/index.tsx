import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import NotFound from "../pages/NotFound";

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
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);
export default routes;