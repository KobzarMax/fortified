import { FormInput } from "../basic/FormComponents/FormInput";
import { Button } from "../basic/Button";
import { Link } from "react-router-dom";
import { ROUTE_PRIVACY_POLICY, ROUTE_TERMS_OF_USE } from "../../routes/routes";
import { FormWrapper } from "./FormWrapper";
import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    business_email: "",
    phone: "",
    job_title: "",
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
      formData.business_email.trim() === ""
    ) {
      setErrorForm(true);
      setValidForm(false);
      return false;
    }
    setErrorForm(null);
    setValidForm(true);
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <FormWrapper id={`contact`} size={`lg`} title={"Let’s Talk"}>
      <p className={`form-wrapper-subtitle subtitle lg`}>
        Need assistance or have a query? Drop us a line and we’ll be happy to
        assist!
      </p>
      <form
        className={`form`}
        id={`contact-form`}
        action={(e) => handleSubmit(e)}
      >
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
            isError={errorForm}
            isValid={validForm}
            name={`last_name`}
            placeholder={`Enter your last name`}
            type={`text`}
            label={`Last name`}
            inputValue={formData.last_name}
            onChange={handleChange}
            error={`Last name is required`}
          />
        </div>
        <FormInput
          required
          isError={errorForm}
          isValid={validForm}
          name={`business_email`}
          placeholder={`Enter your business email`}
          type={`email`}
          label={`Business email`}
          inputValue={formData.business_email}
          onChange={handleChange}
          error={`Business email is required`}
        />
        <FormInput
          isError={errorForm}
          isValid={validForm}
          name={`phone`}
          placeholder={`Enter your phone number`}
          type={`phone`}
          label={`Phone number`}
          inputValue={formData.phone}
          onChange={handleChange}
        />
        <FormInput
          isError={errorForm}
          isValid={validForm}
          name={`job_title`}
          placeholder={`Enter your job title`}
          type={`text`}
          label={`Job title`}
          inputValue={formData.job_title}
          onChange={handleChange}
        />
        <p className={`form-message subtitle md`}>
          By submitting this form, you are agreeing to Fortified 's{" "}
          <Link to={ROUTE_PRIVACY_POLICY}>privacy policy</Link> and{" "}
          <Link to={ROUTE_TERMS_OF_USE}>terms of use</Link>.
        </p>
        <Button type={"submit"} size={"lg"} btnStyle={"primary"}>
          Submit
        </Button>
      </form>
    </FormWrapper>
  );
};
