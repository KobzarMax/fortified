import {FormInput} from "../basic/FormComponents/FormInput";
import {Button} from "../basic/Button";
import {Link} from "react-router-dom";
import {ROUTE_PRIVACY_POLICY, ROUTE_TERMS_OF_USE} from "../../routes/routes";

export const ContactForm = () => {
    return (
        <div className={`form-wrapper`}>
            <div className="form-inner">
                <h2 className={`form-wrapper-title gradient-title`}>
                    Let’s Talk
                </h2>
                <p className={`form-wrapper-subtitle subtitle lg`}>
                    Need assistance or have a query? Drop us a line and we’ll be happy to assist!
                </p>
                <form className={`form`} id={`contact-form`} action="#">
                    <div className={`form-cols`}>
                        <FormInput required name={`first_name`} placeholder={`Enter your first name `} type={`text`} label={`First name`} />
                        <FormInput required name={`last_name`} placeholder={`Enter your last name`} type={`text`} label={`Last name`} />
                    </div>
                    <FormInput required name={`business_email`} placeholder={`Enter your business email`} type={`email`} label={`Business email`} />
                    <FormInput name={`phone`} placeholder={`Enter your phone number`} type={`phone`} label={`Phone number`} />
                    <FormInput name={`job_title`} placeholder={`Enter your job title`} type={`text`} label={`Job title`} />
                    <p className={`form-message subtitle md`}>By submitting this form, you are agreeing to Fortified 's <Link to={ROUTE_PRIVACY_POLICY}>privacy policy</Link> and <Link to={ROUTE_TERMS_OF_USE}>terms of use</Link>.</p>
                    <Button type={'submit'} size={'lg'} btnStyle={'primary'}>
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}