import {Fragment, useState} from "react";
import {Tabs} from "../components/Tabs/Tabs";
import {ContactFormStepOne} from "../components/Forms/ContactFormStepOne";
import {ContactFormStepTwo} from "../components/Forms/ContactFormStemTwo";
import {ContactFormStepTreeV1} from "../components/Forms/ContactFormStepThreeV1";

export const Contact = () => {
    const [currentTab, setCurrentTab] = useState(1);

    const handleCurrentTab = (number) => {
        setCurrentTab(number)
    }

    const renderCurrentTabForm = () => {
        switch (currentTab) {
            case 1:
                return <ContactFormStepOne changeTab={handleCurrentTab} />
            case 2:
                return <ContactFormStepTwo changeTab={handleCurrentTab} />
            case 3:
                return <ContactFormStepTreeV1 changeTab={handleCurrentTab} />
            default:
                return <ContactFormStepOne />
        }
    }

    return (
        <Fragment>
            <Tabs currentTab={currentTab} />
            {renderCurrentTabForm()}
        </Fragment>
    )
}