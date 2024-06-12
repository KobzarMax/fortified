import { FormWrapper } from "./FormWrapper";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_MAIN, ROUTE_TERMS_OF_USE } from "../../routes/routes";
import { Button } from "../basic/Button";
import { arrowRight } from "../../static/images";

export const ContactFormStepThree = ({ changeTab, version }) => {
  const navigate = useNavigate();
  const handleFormFinish = (e) => {
    e.preventDefault();
    switch (version) {
      case 1:
        navigate(ROUTE_MAIN);
        localStorage.setItem("success", "1");
        break;
      case 2:
        changeTab(4);
        break;
      case 3:
        changeTab(5);
        break;
      default:
        console.error("Invalid version");
    }
  };

  return (
    <FormWrapper size={"md"} title={`Content Removal Request Form`}>
      <p className={`form-wrapper-subtitle subtitle lg`}>
        Providing this information authorizes Fortified-Web to generate a Letter
        of Authorization, which will be sent to service providers. Details can
        be found in our <Link to={ROUTE_TERMS_OF_USE}>Terms of Use</Link>
      </p>
      <form className={`form`} id={`contact-form-step-two`} action={undefined}>
        <div className={`form-buttons-wrapper`}>
          <Button
            onClick={() => changeTab(2)}
            type={"button"}
            size={"md"}
            btnStyle={"secondary"}
          >
            <img
              style={{ transform: `rotate(180deg)` }}
              src={arrowRight}
              alt="arrow right"
            />{" "}
            Back
          </Button>
          <Button
            onClick={(e) => handleFormFinish(e)}
            type={"button"}
            size={"lg"}
            btnStyle={"primary"}
          >
            Submit form
          </Button>
        </div>
      </form>
    </FormWrapper>
  );
};
