import {
  ROUTE_MAIN,
  ROUTE_PRIVACY_POLICY,
  ROUTE_TERMS_OF_USE,
} from "../routes/routes";
import { Link } from "react-router-dom";
import {
  facebook,
  footerLogo,
  linkedin,
  twitter,
  youtube,
} from "../static/images";

export const Footer = () => {
  return (
    <footer className={`footer`}>
      <div className={`footer-inner`}>
        <div className={`footer-content`}>
          <div className={`footer-content-images`}>
            <Link to={ROUTE_MAIN}>
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
              <a className={`footer-link`} href="#">
                Folderly
              </a>
              <a className={`footer-link`} href="#">
                Integrations
              </a>
              <a className={`footer-link`} href="#">
                Case Studies
              </a>
              <a className={`footer-link`} href="#">
                Pricing
              </a>
            </div>
            <div className={`footer-links-wrapper`}>
              <p className={`footer-links-name`}>Resources</p>
              <a className={`footer-link`} href="#">
                Blog
              </a>
              <a className={`footer-link`} href="#">
                Help Center
              </a>
              <a className={`footer-link`} href="#">
                ESP Guides
              </a>
              <a className={`footer-link`} href="#">
                Email Deliverability
              </a>
              <a className={`footer-link`} href="#">
                Email Marketing
              </a>
              <a className={`footer-link`} href="#">
                Cold Email Outreach
              </a>
            </div>
            <div className={`footer-links-wrapper`}>
              <p className={`footer-links-name`}>Contact</p>
              <a className={`footer-link`} href="#">
                Request a Demo
              </a>
              <a className={`footer-link`} href="#">
                Email Deliverability Consulting
              </a>
              <a className={`footer-link`} href="#">
                Affiliate Program
              </a>
              <a className={`footer-link`} href="#">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className={`footer-copyright`}>
          <p>Fortifiedweb.io © 2023</p>
          <div className={`footer-copyright-links`}>
            <Link to={ROUTE_PRIVACY_POLICY}>Privacy Policy</Link>
            <Link to={ROUTE_TERMS_OF_USE}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
