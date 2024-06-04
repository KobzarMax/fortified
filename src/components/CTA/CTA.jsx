import { Link } from "react-router-dom";
import { ROUTE_CONTACT } from "../../routes/routes";
import { Button } from "../basic/Button";
import "./CTA.css";

export const CTA = () => {
  return (
    <div className={`cta background-gradient`}>
      <div className={`cta-inner`}>
        <h3 className={`cta-title`}>Ready to Take Action?</h3>
        <p className={`cta-subtitle subtitle lg`}>
          We’re here to lighten your load - just share your brand’s challenges,
          we’ll handle the heavy lifting!
        </p>
      </div>
      <Link to={ROUTE_CONTACT}>
        <Button size={"lg"} btnStyle={"secondary"}>
          Let’s Get Started
        </Button>
      </Link>
    </div>
  );
};
