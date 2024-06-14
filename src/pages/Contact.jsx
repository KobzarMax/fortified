import { Fragment, useState } from "react";
import { Tabs } from "../components/Tabs/Tabs";
import { ContactFormStepOne } from "../components/Forms/ContactFormStepOne";
import { ContactFormStepTwo } from "../components/Forms/ContactFormStemTwo";
import { ContactFormStepThreeV3 } from "../components/Forms/ContactFormStepThreeV3";
import { ContactFormStepThree } from "../components/Forms/ContactFormStepThree";
import { scrollToTop } from "../utils/utils";

export const Contact = () => {
  const [currentTab, setCurrentTab] = useState(1);

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
        return <ContactFormStepThree changeTab={handleCurrentTab} />;
      case 4:
        return <ContactFormStepThreeV3 changeTab={handleCurrentTab} />;
      default:
        return <ContactFormStepOne />;
    }
  };

  return (
    <Fragment>
      <Tabs currentTab={currentTab} />
      {renderCurrentTabForm()}
    </Fragment>
  );
};
