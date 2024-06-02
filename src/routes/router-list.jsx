import {createBrowserRouter} from "react-router-dom";
import {ROUTE_CONTACT, ROUTE_MAIN} from "./routes";
import {Layout} from "../components/Layout";
import ErrorPage from "../pages/ErrorPage";
import {Home} from "../pages/Home";
import {Suspense} from "react";
import {Loader} from "../components/Loader";
import {Contact} from "../pages/Contact";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: (
            <Suspense fallback={<Loader />}>
                <ErrorPage />
            </Suspense>
        ),
        children: [
            {
                path: ROUTE_MAIN,
                element: (
                    <Suspense fallback={<Loader />}>
                        <Home />
                    </Suspense>
                )
            },
            {
                path: ROUTE_CONTACT,
                element: (
                    <Suspense fallback={<Loader />}>
                        <Contact />
                    </Suspense>
                )
            }
        ]
    }
]);