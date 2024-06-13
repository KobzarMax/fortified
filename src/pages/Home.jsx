import { Hero } from "../components/Hero";
import { Fragment, useEffect, useState } from "react";
import { Projects } from "../components/Projects/Projects";
import { Security } from "../components/Security/Security";
import { FAQ } from "../components/FAQ/FAQ";
import { CTA } from "../components/CTA/CTA";
import { ContactForm } from "../components/Forms/ContactForm";
import { ModalSuccess } from "../components/Modal/ModalSuccess";
import { scrollToTop } from "../utils/utils";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const isSuccess = localStorage.getItem("success");

  useEffect(() => {
    if (isSuccess === "1") {
      handleShowModal();
    }
  }, []);

  useEffect(() => {
    scrollToTop();
  }, []);

  const handleShowModal = () => {
    setShowModal(!showModal);
    localStorage.removeItem("success");
    if (!showModal) {
      document.body.classList.add("_lock");
    } else {
      document.body.classList.remove("_lock");
    }
  };

  return (
    <Fragment>
      <Hero />
      <Projects />
      <Security />
      <FAQ />
      <CTA />
      <ContactForm />
      {showModal && <ModalSuccess onClose={handleShowModal} />}
    </Fragment>
  );
};
