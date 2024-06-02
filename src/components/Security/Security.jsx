import {lapm, profi, securityBg, solutions} from "../../static/images";

const securityList = [
    {
        title: 'Expertise',
        description: 'We\'re a team of experienced security and IP experts adept at fortifying businesses, including retailers, financial institutions, manufacturers, private enterprises, and small businesses.',
        image: lapm
    },
    {
        title: 'Professionalism',
        description: 'Our dedicated professionals are committed to fortifying your online presence with precision and care.',
        image: profi
    },
    {
        title: 'Tailored Solutions',
        description: 'We understand that each client\'s needs are unique. That\'s why we offer customized solutions crafted to address your specific concerns and requirements.',
        image: solutions
    }
]

export const Security = () => {
    return (
        <div className={`security background-gradient`}>
            <img loading={"lazy"} className={`security-bg`} src={securityBg} alt="security bg"/>
            <div className="security-inner">
                <h2 className={`security-title`}>
                    Security and IP Experts
                </h2>
                <p className={`security-subtitle subtitle lg`}>
                    We are committed to providing our clients with the highest level of service and support. Contact us today to learn more about how we can help you protect your business.
                </p>
                <div className="security-items">
                    {securityList.map((item, index) => (
                        <div className={`security-item`} key={index}>
                            <img loading={"lazy"} src={item.image} alt={item.title}/>
                            <h5 className={`security-item-title`}>
                                {item.title}
                            </h5>
                            <p className={`security-item-description subtitle md`}>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}