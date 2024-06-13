import { successFormV2 } from "../../static/images";
import { Link } from "react-router-dom";
import { ROUTE_MAIN } from "../../routes/routes";
import { Button } from "../basic/Button";
import { FormWrapper } from "./FormWrapper";
import { navigateHelper } from "../../utils/utils";

export const ContactFormStepThreeV3 = () => {
  return (
    <FormWrapper size={"md"}>
      <div className={`form success v2`}>
        <div className={`success-image-wrapper background-gradient`}>
          <img src={successFormV2} alt="success form" />
        </div>
        <div className={`form-success-inner`}>
          <p className={`success-title gradient-title`}>
            Thank you for choosing Fortified Web's services!
          </p>
          <p className={`subtitle md`}>
            Our sharp team of analysts is diving right into your content removal
            request. Keep an eye on your inbox for a detailed email outlining
            the process and next steps.
          </p>
          <p className={`subtitle md`}>
            While we work our magic, feel free to shoot us an email at{" "}
            <a href="mailto:info@fortified-web.com">info@fortified-web.com</a>{" "}
            for any urgent queries.
          </p>
          <Link onClick={() => navigateHelper()} to={ROUTE_MAIN}>
            <Button
              size={"lg"}
              btnStyle={`primary`}
              style={{ margin: "16px auto 0" }}
            >
              Back To Homepage
            </Button>
          </Link>
        </div>
      </div>
    </FormWrapper>
  );
};
