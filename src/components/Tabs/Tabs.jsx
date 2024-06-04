import './Tabs.css'

const tabs = [
    {
        name: 'Contact Information'
    },
    {
        name: 'Describe Your Request'
    },
    {
        name: 'Payment Checkout'
    }
]

export const Tabs = ({ currentTab }) => {


    return (
        <div className={`tabs-wrapper`}>
            {tabs.map((tab, index) => {
                const tabNumber = index + 1;
                const activeTab = currentTab === tabNumber;
                const filledTab = currentTab < tabNumber;
                return (
                    <div key={tab.name} className={`tab-item ${activeTab && 'active'} ${filledTab && 'filled'}`}>
                        <span className={`tab-item-number`}>{tabNumber}</span>
                        <p className={`tab-item-name`}>{tab.name}</p>
                    </div>
                )
            })}
        </div>
    )
}