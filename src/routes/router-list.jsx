import { createBrowserRouter } from "react-router-dom";
import {
  ROUTE_COMPONENTS,
  ROUTE_CONTACT,
  ROUTE_CONTACT_FINISH_V2,
  ROUTE_CONTACT_FINISH_V3,
  ROUTE_MAIN,
  ROUTE_PRIVACY_POLICY,
  ROUTE_TERMS_OF_USE,
} from "./routes";
import { Layout } from "../components/Layout";
import ErrorPage from "../pages/ErrorPage";
import { Home } from "../pages/Home";
import { Suspense } from "react";
import { Loader } from "../components/Loader";
import { Contact } from "../pages/Contact";
import { TermsOfUse } from "../pages/TermsOfUse";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";
import { Components } from "../pages/Components";

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
        ),
      },
      {
        path: ROUTE_CONTACT,
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: ROUTE_CONTACT_FINISH_V2,
        element: (
          <Suspense fallback={<Loader />}>
            <Contact baseTab={3} version={2} />
          </Suspense>
        ),
      },
      {
        path: ROUTE_CONTACT_FINISH_V3,
        element: (
          <Suspense fallback={<Loader />}>
            <Contact baseTab={3} version={3} />
          </Suspense>
        ),
      },
      {
        path: ROUTE_TERMS_OF_USE,
        element: (
          <Suspense fallback={<Loader />}>
            <TermsOfUse />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PRIVACY_POLICY,
        element: (
          <Suspense fallback={<Loader />}>
            <PrivacyPolicy />
          </Suspense>
        ),
      },
      {
        path: ROUTE_COMPONENTS,
        element: (
          <Suspense fallback={<Loader />}>
            <Components />
          </Suspense>
        ),
      },
    ],
  },
]);
