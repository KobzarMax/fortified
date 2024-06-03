import {project1, project2, project3, project4} from "../../static/images";
import {Tag} from "../basic/Tag";
import {ProjectItem} from "./ProjectItem";
import './Projects.css'

const projectsList = [
    {
        title: 'Websites & Domains',
        description: 'Online identity theft and intellectual property misuse are serious threats. Our solution protects your online identity and assets from trademark infringement, copyright violations, and other deceptive practices.',
        image: project1,
    },
    {
        title: 'Social Media Platforms',
        description: 'Social media IP misuse and identity theft harm reputations, finances, and safety.',
        image: project2,
    },
    {
        title: 'Marketplaces',
        description: 'Unauthorized listings on marketplaces not only violate intellectual property rights but also undermine the credibility of genuine sellers.',
        image: project3,
    },
    {
        title: 'Mobile Apps',
        description: 'Fake mobile apps can compromise user data, infect devices with malware, and tarnish the reputation of legitimate app developers. Our proactive approach detects and removes impersonating apps, ensuring a safe app ecosystem.s',
        image: project4,
    }
]

export const Projects = () => {
    return (
        <div className={`projects`}>
            <div className="projects-inner">
                <Tag text={'Our services'} type={'text'} />
                <h2 className={`projects-title gradient-title`}>
                    Protect Your Brand Online
                </h2>
                <p className={`projects-subtitle subtitle lg`}>
                    Keep your online identity, intellectual property, reputation, and assets safe across various platforms
                </p>
            </div>
            <div className="projects-wrapper">
                {projectsList.map((project, index) => (
                    <ProjectItem key={index} project={project} />
                ))}
            </div>
        </div>
    )
}