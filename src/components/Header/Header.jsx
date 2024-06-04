import {Link, useLocation} from "react-router-dom";
import { ROUTE_CONTACT, ROUTE_MAIN } from "../../routes/routes";
import { headerLogo, xClose } from "../../static/images";
import { Button } from "../basic/Button";
import { useEffect, useRef, useState } from "react";
import "./Header.css";

export const Header = () => {
  const [headerView, setHeaderView] = useState(false);
  const location = useLocation();
  const ref = useRef(null);
  useEffect(() => {
    function handleScroll() {
      const scrolledContentHeight = window.scrollY > 250;
      if (scrolledContentHeight) {
        setHeaderView(true);
      } else {
        setHeaderView(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={ref}
      id={`header`}
      className={`header ${headerView ? "scrolled" : ""}`}
    >
      <div className="header-inner">
        <Link to={ROUTE_MAIN}>
          <img loading={"lazy"} src={headerLogo} alt="header logo" />
        </Link>
        {}
        <Link to={ROUTE_CONTACT}>
          <Button type={"button"} btnStyle={`primary`} size={`md`}>
            Contact Us
          </Button>
        </Link>
      </div>
    </header>
  );
};
