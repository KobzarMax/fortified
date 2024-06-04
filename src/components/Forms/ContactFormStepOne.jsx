import {FormWrapper} from "./FormWrapper";
import {Link} from "react-router-dom";
import {ROUTE_TERMS_OF_USE} from "../../routes/routes";
import {FormInput} from "../basic/FormComponents/FormInput";
import {Button} from "../basic/Button";

export const ContactFormStepOne = ({ changeTab }) => {
    return (
        <FormWrapper size={'md'} title={`Content Removal Request Form`}>
            <p className={`form-wrapper-subtitle subtitle lg`}>
                Providing this information authorizes Fortified-Web to generate a Letter of Authorization, which will be
                sent to service providers. Details can be found in our <Link to={ROUTE_TERMS_OF_USE}>Terms of Use</Link>
            </p>
            <form className={`form`} id={`contact-form-step-one`} action="#">
                <div className={`form-cols`}>
                    <FormInput
                        required
                        name={`first_name`}
                        placeholder={`Enter your first name `}
                        type={`text`}
                        label={`First name`}
                    />
                    <FormInput
                        required
                        name={`last_name`}
                        placeholder={`Enter your last name`}
                        type={`text`}
                        label={`Last name`}
                    />
                </div>
                <FormInput
                    required
                    name={`organization`}
                    placeholder={`Enter organization/company name`}
                    type={`text`}
                    label={`Organization/Company Name`}
                />
                <FormInput
                    name={`position`}
                    placeholder={`Enter your position`}
                    type={`text`}
                    label={`Position (optional)`}
                />
                <FormInput
                    required
                    name={`email`}
                    placeholder={`Enter your email address`}
                    type={`email`}
                    label={`Email Address (main communication)`}
                />
                <FormInput
                    required
                    name={`phone`}
                    placeholder={`Enter your phone number`}
                    type={`phone`}
                    label={`Phone Number`}
                />
                <FormInput
                    required
                    name={`business_description`}
                    placeholder={`Enter your business description`}
                    type={`text`}
                    label={`Business Description (optional)`}
                />
                <Button onClick={() => changeTab(2)} type={"button"} size={"lg"} btnStyle={"primary"}>
                    Next Step
                </Button>
            </form>
        </FormWrapper>
    )
}