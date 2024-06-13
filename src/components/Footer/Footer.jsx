import {
  ROUTE_MAIN,
  ROUTE_PRIVACY_POLICY,
  ROUTE_TERMS_OF_USE,
} from "../../routes/routes";
import { Link } from "react-router-dom";
import {
  facebook,
  footerLogo,
  linkedin,
  twitter,
  youtube,
} from "../../static/images";
import "./Footer.css";
import { navigateHelper } from "../../utils/utils";

export const Footer = () => {
  return (
    <footer className={`footer`}>
      <div className={`footer-inner`}>
        <div className={`footer-content`}>
          <div className={`footer-content-images`}>
            <Link onClick={() => navigateHelper()} to={ROUTE_MAIN}>
              <img loading={`lazy`} src={footerLogo} alt="footer logo" />
            </Link>
            <div className={`footer-socials`}>
              <img loading={`lazy`} src={facebook} alt="facebook" />
              <img loading={`lazy`} src={linkedin} alt="linkedin" />
              <img loading={`lazy`} src={youtube} alt="youtube" />
              <img loading={`lazy`} src={twitter} alt="twitter" />
            </div>
          </div>
          <div className={`footer-content-links`}>
            <div className={`footer-links-wrapper`}>
              <p className={`footer-links-name`}>Product</p>
              <Link className={`footer-link`} to={`#`}>
                Folderly
              </Link>
              <Link className={`footer-link`} to={`#`}>
                Integrations
              </Link>
              <Link className={`footer-link`} to={`#`}>
                Case Studies
              </Link>
              <Link className={`footer-link`} to={`#`}>
                Pricing
              </Link>
            </div>
            <div className={`footer-links-wrapper`}>
              <p className={`footer-links-name`}>Resources</p>
              <Link className={`footer-link`} to={`#`}>
                Blog
              </Link>
              <Link className={`footer-link`} to={`#`}>
                Help Center
              </Link>
              <Link className={`footer-link`} to={`#`}>
                ESP Guides
              </Link>
              <Link className={`footer-link`} to={`#`}>
                Email Deliverability
              </Link>
              <Link className={`footer-link`} to={`#`}>
                Email Marketing
              </Link>
              <Link className={`footer-link`} to={`#`}>
                Cold Email Outreach
              </Link>
            </div>
            <div className={`footer-links-wrapper`}>
              <p className={`footer-links-name`}>Contact</p>
              <Link className={`footer-link`} to={`#`}>
                Request a Demo
              </Link>
              <Link className={`footer-link`} to={`#`}>
                Email Deliverability Consulting
              </Link>
              <Link className={`footer-link`} to={`#`}>
                Affiliate Program
              </Link>
              <Link className={`footer-link`} to={`#`}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className={`footer-copyright`}>
          <p>Fortifiedweb.io © 2023</p>
          <div className={`footer-copyright-links`}>
            <Link onClick={() => navigateHelper()} to={ROUTE_PRIVACY_POLICY}>
              Privacy Policy
            </Link>
            <Link onClick={() => navigateHelper()} to={ROUTE_TERMS_OF_USE}>
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
