import {Link} from "react-router-dom";
import {ROUTE_TERMS_OF_USE} from "../../routes/routes";
import {FormWrapper} from "./FormWrapper";
import {Button} from "../basic/Button";
import {arrowRight} from "../../static/images";
import {FormInput} from "../basic/FormComponents/FormInput";
import {FormSelect} from "../basic/FormComponents/FormSelect";

export const ContactFormStepTwo = ({ changeTab }) => {
  return (
      <FormWrapper size={'md'} title={`Content Removal Request Form`}>
        <p className={`form-wrapper-subtitle subtitle lg`}>
          Providing this information authorizes Fortified-Web to generate a Letter of Authorization, which will be
          sent to service providers. Details can be found in our <Link to={ROUTE_TERMS_OF_USE}>Terms of Use</Link>
        </p>
        <form className={`form`} id={`contact-form-step-two`} action="#">
          <FormInput
              name={`link_to_remove`}
              placeholder={`Enter link to the content you wish to remove`}
              type={`text`}
              label={`Link to the content you wish to remove`}
          />
            <FormSelect inputValue={''} options={['option1', 'option2', 'option3', 'option4', 'option5', 'option6']} label={'Link to original/official online presence (e.g., Website, Social Account)'} placeholder={'Enter link to original/official online presence'} />
          <div className={`form-buttons-wrapper`}>
            <Button onClick={() => changeTab(1)} type={"button"} size={"md"} btnStyle={"secondary"}>
              <img style={{ transform: `rotate(180deg)` }} src={arrowRight} alt="arrow right"/> Back
            </Button>
            <Button onClick={() => changeTab(3)} type={"button"} size={"lg"} btnStyle={"primary"}>
              Next Step
            </Button>
          </div>
        </form>
      </FormWrapper>
);
};
