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
  return (
    <div
      style={{
        height: currentTab === tabs.length && "0",
        padding: currentTab === tabs.length && "0",
      }}
      className={`tabs-wrapper`}
    >
      <div className="tabs-inner">
        <div className={`tabs-progress-wrapper`}>
          <div className={`tabs-progress-static`}></div>
          <div
            style={{ width: `${Number(currentTab) * 33.33}%` }}
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
