import { Fragment, useEffect, useState } from "react";
import { Tabs } from "../components/Tabs/Tabs";
import { ContactFormStepOne } from "../components/Forms/ContactFormStepOne";
import { ContactFormStepTwo } from "../components/Forms/ContactFormStemTwo";
import { ContactFormStepThreeV2 } from "../components/Forms/ContactFormStepThreeV2";
import { ContactFormStepThreeV3 } from "../components/Forms/ContactFormStepThreeV3";
import { ContactFormStepThree } from "../components/Forms/ContactFormStepThree";
import {
  ROUTE_CONTACT,
  ROUTE_CONTACT_FINISH_V2,
  ROUTE_CONTACT_FINISH_V3,
} from "../routes/routes";
import { Link } from "react-router-dom";
import { Button } from "../components/basic/Button";
import { arrowRight } from "../static/images";
import { scrollToTop } from "../utils/utils";

export const Contact = () => {
  const version = 1;
  const [currentTab, setCurrentTab] = useState(1);

  useEffect(() => {
    scrollToTop();
  }, []);

  const handleCurrentTab = (number) => {
    setCurrentTab(number);
    scrollToTop();
  };

  const renderCurrentTabForm = () => {
    switch (currentTab) {
      case 1:
        return <ContactFormStepOne changeTab={handleCurrentTab} />;
      case 2:
        return <ContactFormStepTwo changeTab={handleCurrentTab} />;
      case 3:
        return (
          <ContactFormStepThree
            version={version}
            changeTab={handleCurrentTab}
          />
        );
      case 4:
        return <ContactFormStepThreeV2 changeTab={handleCurrentTab} />;
      case 5:
        return <ContactFormStepThreeV3 changeTab={handleCurrentTab} />;
      default:
        return <ContactFormStepOne />;
    }
  };

  return (
    <Fragment>
      <Tabs currentTab={currentTab} />
      {renderCurrentTabForm()}
      <div>
        <Link className={`cta-link`} to={ROUTE_CONTACT}>
          <Button size={"lg"} btnStyle={"secondary"}>
            Option 1 <img loading={"lazy"} src={arrowRight} alt="arrow right" />
          </Button>
        </Link>
        <Link className={`cta-link`} to={ROUTE_CONTACT_FINISH_V2}>
          <Button size={"lg"} btnStyle={"secondary"}>
            Option 2 <img loading={"lazy"} src={arrowRight} alt="arrow right" />
          </Button>
        </Link>
        <Link className={`cta-link`} to={ROUTE_CONTACT_FINISH_V3}>
          <Button size={"lg"} btnStyle={"secondary"}>
            Option 3 <img loading={"lazy"} src={arrowRight} alt="arrow right" />
          </Button>
        </Link>
      </div>
    </Fragment>
  );
};
