import {Hero} from "../components/Hero";
import {Fragment} from "react";
import {Projects} from "../components/Projects/Projects";
import {Security} from "../components/Security/Security";
import {FAQ} from "../components/FAQ/FAQ";
import {CTA} from "../components/CTA/CTA";
import {ContactForm} from "../components/Forms/ContactForm";

export const Home = () => {
    return (
        <Fragment>
            <Hero />
            <Projects />
            <Security />
            <FAQ />
            <CTA />
            <ContactForm />
        </Fragment>
    )
}