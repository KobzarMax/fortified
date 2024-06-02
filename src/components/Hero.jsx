import {Tag} from "./basic/Tag";
import {Link} from "react-router-dom";
import {ROUTE_CONTACT} from "../routes/routes";
import {Button} from "./basic/Button";
import {arrowRight} from "../static/images";

export const Hero = () => {
    return (
        <div className={`hero background-gradient`}>
            <div className={`hero-inner`}>
                <Tag type={'containered'} text={`Brand Protection and Management`} />
                <h1 className={`hero-title`}>
                    <b>Fortified Web</b> <br /> Reinforce Your Digital Presence
                </h1>
                <p className="hero-subtitle subtitle lg">
                    Embrace the power of simplicity with an stress-free fake content removal service. With our groundbreaking <b>pay-per-takedown</b> approach, you’ll be able to remove impersonated content in a fast, efficient, and effective way!
                </p>
            </div>
            <Link className={`cta-link`} to={ROUTE_CONTACT}>
                <Button size={'lg'} btnStyle={'secondary'}>
                    Take Action Today <img loading={"lazy"} src={arrowRight} alt="arrow right" />
                </Button>
            </Link>
        </div>
    )
}