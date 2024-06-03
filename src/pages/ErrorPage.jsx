import { Link } from "react-router-dom";
import {ROUTE_MAIN} from "../routes/routes";
import {Header} from "../components/Header/Header";
import {Fragment} from "react";
import {Footer} from "../components/Footer/Footer";
import {Button} from "../components/basic/Button";
import {arrowRight} from "../static/images";

export default function ErrorPage () {

    return (
        <Fragment>
            <Header />
            <div className="error-container">
                <div className={`error-page-text`}>
                    <h4 className={`error-page-title`}>Sorry!</h4>
                    <p className={`error-page-subtitle`}>We couldn’t find what you were looking for...</p>
                </div>
                <Link className={`cta-link`} to={ROUTE_MAIN}>
                    <Button btnStyle={`primary`} size={`lg`}>
                        Back To The Homepage <img className={`colored-to-white`} src={arrowRight} alt="arrow back"/>
                    </Button>
                </Link>
                <span className={`error-code`}>
                    404
                </span>
            </div>
            <Footer />
        </Fragment>

    )
}