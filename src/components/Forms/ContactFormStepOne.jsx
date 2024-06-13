import { FormWrapper } from "./FormWrapper";
import { Link } from "react-router-dom";
import { ROUTE_TERMS_OF_USE } from "../../routes/routes";
import { FormInput } from "../basic/FormComponents/FormInput";
import { Button } from "../basic/Button";
import { useState } from "react";
import { navigateHelper, scrollToTop } from "../../utils/utils";

export const ContactFormStepOne = ({ changeTab }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    organization: "",
    position: "",
    email: "",
    phone: "",
    business_description: "",
  });
  const [validForm, setValidForm] = useState(null);
  const [errorForm, setErrorForm] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (
      formData.first_name.trim() === "" ||
      formData.last_name.trim() === "" ||
      formData.organization.trim() === "" ||
      formData.email.trim() === "" ||
      formData.phone.trim() === ""
    ) {
      scrollToTop();
      setErrorForm(true);
      setValidForm(false);
      return false;
    }
    scrollToTop();
    setErrorForm(null);
    setValidForm(true);
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      changeTab(2);
    }
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
      <form className={`form`} id={`contact-form-step-one`} action={undefined}>
        <div className={`form-cols`}>
          <FormInput
            required
            name={`first_name`}
            placeholder={`Enter your first name `}
            type={`text`}
            label={`First name`}
            inputinputValue={formData.first_name}
            onChange={handleChange}
            isError={errorForm}
            isValid={validForm}
            error={`First name is required`}
          />
          <FormInput
            required
            name={`last_name`}
            placeholder={`Enter your last name`}
            type={`text`}
            label={`Last name`}
            inputinputValue={formData.last_name}
            onChange={handleChange}
            isError={errorForm}
            isValid={validForm}
            error={`Last name is required`}
          />
        </div>
        <FormInput
          required
          name={`organization`}
          placeholder={`Enter organization/company name`}
          type={`text`}
          label={`Organization/Company Name`}
          inputinputValue={formData.organization}
          onChange={handleChange}
          isError={errorForm}
          isValid={validForm}
          error={`Organization/Company Name is required`}
        />
        <FormInput
          name={`position`}
          placeholder={`Enter your position`}
          type={`text`}
          label={`Position (optional)`}
          inputinputValue={formData.position}
          onChange={handleChange}
          isError={errorForm}
          isValid={validForm}
          error={`Position is required`}
        />
        <FormInput
          required
          name={`email`}
          placeholder={`Enter your email address`}
          type={`email`}
          label={`Email Address (main communication)`}
          inputinputValue={formData.email}
          onChange={handleChange}
          isError={errorForm}
          isValid={validForm}
          error={`Email Address is required`}
        />
        <FormInput
          required
          name={`phone`}
          placeholder={`Enter your phone number`}
          type={`phone`}
          label={`Phone Number`}
          inputinputValue={formData.phone}
          onChange={handleChange}
          isError={errorForm}
          isValid={validForm}
          error={`Phone Number is required`}
        />
        <FormInput
          name={`business_description`}
          placeholder={`Enter your business description`}
          type={`text`}
          label={`Business Description (optional)`}
          inputinputValue={formData.business_description}
          onChange={handleChange}
          isError={errorForm}
          isValid={validForm}
          error={`Business Description is required`}
        />
        <Button
          type={"button"}
          onClick={(e) => handleSubmit(e)}
          size={"lg"}
          btnStyle={"primary"}
        >
          Next Step
        </Button>
      </form>
    </FormWrapper>
  );
};
