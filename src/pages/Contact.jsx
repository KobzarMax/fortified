import { Fragment, useState } from "react";
import { Tabs } from "../components/Tabs/Tabs";
import { ContactFormStepOne } from "../components/Forms/ContactFormStepOne";
import { ContactFormStepTwo } from "../components/Forms/ContactFormStemTwo";
import { ContactFormStepThreeV2 } from "../components/Forms/ContactFormStepThreeV2";
import { ContactFormStepThreeV3 } from "../components/Forms/ContactFormStepThreeV3";

export const Contact = ({ baseTab, version }) => {
  const [currentTab, setCurrentTab] = useState(baseTab ? baseTab : 1);

  const handleCurrentTab = (number) => {
    setCurrentTab(number);
  };

  const handleCorrectFinalStep = () => {
    switch (version) {
      case 2:
        return <ContactFormStepThreeV2 />;
      case 3:
        return <ContactFormStepThreeV3 />;
    }
  };

  const renderCurrentTabForm = () => {
    switch (currentTab) {
      case 1:
        return <ContactFormStepOne changeTab={handleCurrentTab} />;
      case 2:
        return <ContactFormStepTwo changeTab={handleCurrentTab} />;
      case 3:
        return handleCorrectFinalStep();
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
