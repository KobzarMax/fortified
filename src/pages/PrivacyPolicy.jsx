import {Fragment} from "react";
import {PageHeading} from "../components/PageHeading";

export const PrivacyPolicy = () => {
    return (
        <Fragment>
            <PageHeading>
                <h1 className={`page-heading-title`}>
                    Privacy Policy
                </h1>
                <p className={`page-heading-subtitle subtitle lg`}>
                    Last Updated: April 15th, 2024
                </p>
            </PageHeading>
            <div className={`legal-text-wrapper`}>
                <div className={`legal-text-section`}>
                    <p className={`legal-text subtitle lg`}>
                        Welcome to Fortified Web, your premier destination for safeguarding your online identity against
                        digital threats. Your privacy is important to us, and we are committed to safeguarding your
                        personal information. This Privacy Policy outlines how Fortified-Web collects, uses, and
                        protects your data when you access and use our website and services.
                    </p>
                </div>
                <div className={`legal-text-section`}>
                    <h5 className={`gradient-title`}>
                        Introduction
                    </h5>
                    <p className={`legal-text subtitle lg`}>
                        This Privacy Policy is an integral part of our Terms of Service, forming a legally binding
                        agreement between you and Fortified-Web. By accessing or using our website and services, you
                        agree to comply with this Privacy Policy. If you do not agree with any part of this policy,
                        please refrain from using our website and services.
                    </p>
                </div>
                <div className={`legal-text-section`}>
                    <h5 className={`gradient-title`}>
                        Changes to Privacy Policy
                    </h5>
                    <p className={`legal-text subtitle lg`}>
                        We may update this Privacy Policy periodically. Any changes will be effective immediately upon
                        posting on our website. We encourage you to review this Privacy Policy regularly to stay
                        informed of any updates. The date of the last revision will be indicated at the top of this
                        page.
                    </p>
                </div>
                <div className={`legal-text-section`}>
                    <h5 className={`gradient-title`}>
                        Contact Information
                    </h5>
                    <p className={`legal-text subtitle lg`}>
                        If you have any questions or concerns about this Privacy Policy, please feel free to contact us at <a
                        href="mailto:info@fortified-web.com">info@fortified-web.com</a>
                    </p>
                </div>
            </div>
        </Fragment>
    )
}