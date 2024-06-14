import { FormWrapper } from "./FormWrapper";
import { Link } from "react-router-dom";
import { ROUTE_TERMS_OF_USE } from "../../routes/routes";
import { Button } from "../basic/Button";
import { arrowRight } from "../../static/images";
import { navigateHelper, scrollToTop } from "../../utils/utils";

export const ContactFormStepThree = ({ changeTab }) => {
  const handleFormFinish = (e) => {
    e.preventDefault();
    scrollToTop();
    changeTab(4);
  };

  return (
    <FormWrapper size={"md"} title={`Content Removal Request Form`}>
      <p className={`form-wrapper-subtitle subtitle lg`}>
        Providing this information authorizes Fortified-Web to generate a Letter
        of Authorization, which will be sent to service providers. Details can
        be found in our{" "}
        <Link onClick={() => navigateHelper()} to={ROUTE_TERMS_OF_USE}>
          Terms of Use
        </Link>
      </p>
      <form className={`form`} id={`contact-form-step-two`} action={undefined}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nisi
          molestias porro quas. A nulla debitis maxime id assumenda, esse omnis!
          Aspernatur libero recusandae officiis autem ducimus sint quia dolore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nisi
          molestias porro quas. A nulla debitis maxime id assumenda, esse omnis!
          Aspernatur libero recusandae officiis autem ducimus sint quia dolore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nisi
          molestias porro quas. A nulla debitis maxime id assumenda, esse omnis!
          Aspernatur libero recusandae officiis autem ducimus sint quia dolore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nisi
          molestias porro quas. A nulla debitis maxime id assumenda, esse omnis!
          Aspernatur libero recusandae officiis autem ducimus sint quia dolore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nisi
          molestias porro quas. A nulla debitis maxime id assumenda, esse omnis!
          Aspernatur libero recusandae officiis autem ducimus sint quia dolore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nisi
          molestias porro quas. A nulla debitis maxime id assumenda, esse omnis!
          Aspernatur libero recusandae officiis autem ducimus sint quia dolore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nisi
          molestias porro quas. A nulla debitis maxime id assumenda, esse omnis!
          Aspernatur libero recusandae officiis autem ducimus sint quia dolore.
        </p>
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
