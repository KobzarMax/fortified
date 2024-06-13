import { check } from "../../static/images";
import "./Tabs.css";

const tabs = [
  {
    name: "Contact Information",
  },
  {
    name: "Describe Your Request",
  },
  {
    name: "Payment Checkout",
  },
];

export const Tabs = ({ currentTab }) => {
  const handleProgressLength = () => {
    switch (currentTab) {
      case 1:
        return "0%";
      case 2:
        return "50%";
      case 3:
        return "100%";
      case 4:
        return "100%";
      case 5:
        return "100%";
      default:
        return "0%";
    }
  };

  return (
    <div className={`tabs-wrapper`}>
      <div className="tabs-inner">
        <div className={`tabs-progress-wrapper`}>
          <div className={`tabs-progress-static`}></div>
          <div
            style={{ width: handleProgressLength() }}
            className={`tabs-progress-filling`}
          ></div>
        </div>
        {tabs.map((tab, index) => {
          const tabNumber = index + 1;
          const activeTab = currentTab === tabNumber;
          const filledTab = currentTab > tabNumber;
          return (
            <div
              key={tab.name}
              className={`tab-item ${activeTab ? "active" : ""} ${
                filledTab ? "filled" : ""
              }`}
            >
              <span className={`tab-item-number`}>
                {filledTab ? <img src={check} alt="checkmark" /> : tabNumber}
              </span>
              <p className={`tab-item-name subtitle md`}>{tab.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
