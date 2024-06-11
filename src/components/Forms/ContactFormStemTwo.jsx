import { Link, useNavigate } from "react-router-dom";
import { ROUTE_MAIN, ROUTE_TERMS_OF_USE } from "../../routes/routes";
import { FormWrapper } from "./FormWrapper";
import { Button } from "../basic/Button";
import { arrowRight } from "../../static/images";
import { FormInput } from "../basic/FormComponents/FormInput";
import { FormSelect } from "../basic/FormComponents/FormSelect";
import { FormCustombox } from "../basic/FormComponents/FormCustombox";
import { FormFileInput } from "../basic/FormComponents/FormFileInput";
import { FormTextarea } from "../basic/FormComponents/FormTextarea";
import { useState } from "react";
import { scrollToTop } from "../../utils/utils";

export const ContactFormStepTwo = ({ changeTab }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    link_to_remove: "",
    link_to_original: "",
    is_protected: null,
    reg_number: "",
    jurisdiction: "",
    file: null,
    issue: "",
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
      formData.link_to_remove.trim() === "" ||
      formData.link_to_original.trim() === "" ||
      formData.is_protected === null ||
      (formData.is_protected && formData.reg_number.trim() === "") ||
      (formData.is_protected && formData.jurisdiction.trim() === "") ||
      formData.issue.trim() === ""
    ) {
      scrollToTop();
      setErrorForm(true);
      setValidForm(false);
      return false;
    }
    setErrorForm(null);
    setValidForm(true);
    return true;
  };

  const handleFormFinish = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      navigate(ROUTE_MAIN);
      localStorage.setItem("success", "1");
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
        <FormInput
          name={`link_to_remove`}
          placeholder={`Enter link to the content you wish to remove`}
          type={`text`}
          label={`Link to the content you wish to remove`}
          onChange={handleChange}
          inputValue={formData.link_to_remove}
          isError={errorForm}
          isValid={validForm}
        />
        <FormSelect
          inputValue={formData.link_to_original}
          options={[
            "option1",
            "option2",
            "option3",
            "option4",
            "option5",
            "option6",
          ]}
          onChange={(value) =>
            setFormData({ ...formData, link_to_original: value })
          }
          isError={errorForm}
          isValid={validForm}
          label={
            "Link to original/official online presence (e.g., Website, Social Account)"
          }
          placeholder={"Enter link to original/official online presence"}
        />
        <div className={`form-field`}>
          <p className={`form-label`}>
            Is the Content Protected by Trademark or Copyright?
          </p>
          <div className={`form-checkboxes-wrapper`}>
            <FormCustombox
              label={`Yes`}
              name={`is_protected`}
              id={`radio1`}
              type={`radio`}
              onChange={handleChange}
              isError={errorForm}
              isValid={validForm}
            />
            <FormCustombox
              label={`No`}
              name={`is_protected`}
              id={`radio2`}
              type={`radio`}
              onChange={handleChange}
              isError={errorForm}
              isValid={validForm}
            />
          </div>
        </div>
        <div className={`form-field`}>
          <p className={`form-label`}>
            If Yes, Upload Copy of Certificate or Provide Registration Number
            and Jurisdiction
          </p>
          <div className={`form-cols`}>
            <FormInput
              name={`reg_number`}
              placeholder={`Enter your registration number`}
              type={`text`}
              onChange={handleChange}
              inputValue={formData.reg_number}
              isError={errorForm}
              isValid={validForm}
            />
            <FormSelect
              inputValue={formData.jurisdiction}
              onChange={(value) =>
                setFormData({ ...formData, jurisdiction: value })
              }
              isError={errorForm}
              isValid={validForm}
              options={[
                "option1",
                "option2",
                "option3",
                "option4",
                "option5",
                "option6",
              ]}
              placeholder={"Select jurisdiction"}
            />
          </div>
        </div>
        <FormFileInput />
        <FormTextarea
          name={`issue`}
          placeholder={`Explain your issue here...`}
          label={`Explain the Issue with as Many Details as Possible`}
          onChange={handleChange}
          inputValue={formData.issue}
          isError={errorForm}
          isValid={validForm}
        />
        <div className={`form-buttons-wrapper`}>
          <Button
            onClick={() => changeTab(1)}
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
            Next Step
          </Button>
        </div>
      </form>
    </FormWrapper>
  );
};
