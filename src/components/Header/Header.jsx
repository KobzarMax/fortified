import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTE_CONTACT, ROUTE_MAIN } from "../../routes/routes";
import { headerLogo, xClose } from "../../static/images";
import { Button } from "../basic/Button";
import { useEffect, useRef, useState } from "react";
import "./Header.css";
import { navigateHelper } from "../../utils/utils";

export const Header = () => {
  const [headerView, setHeaderView] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const ref = useRef(null);

  const scrollToContact = (event) => {
    event.stopPropagation();
    navigate(ROUTE_MAIN);
    setTimeout(() => {
      const element = document.getElementById("contact");
      element?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

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
        <Link onClick={() => navigateHelper()} to={ROUTE_MAIN}>
          <img loading={"lazy"} src={headerLogo} alt="header logo" />
        </Link>
        {location.pathname === ROUTE_CONTACT ? (
          <div onClick={() => navigate(-1)} className={`close-contact`}>
            <img src={xClose} alt="x close" />
          </div>
        ) : (
          <Button
            onClick={scrollToContact}
            type={"button"}
            btnStyle={`primary`}
            size={`md`}
          >
            Contact Us
          </Button>
        )}
      </div>
    </header>
  );
};
