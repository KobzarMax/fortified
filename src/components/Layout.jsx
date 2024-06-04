import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main className={`main`}>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};
