import { chevron } from "../../static/images";
import { useEffect, useRef } from "react";
import { slideUp, slideDown } from "../../utils/utils";

export const FaqItem = ({ content, index, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      slideDown(contentRef.current);
    } else {
      slideUp(contentRef.current);
    }
  }, [isOpen]);

  return (
    <div className={`faq-answer-item ${isOpen ? "open" : ""}`}>
      <div className="faq-answer-header" onClick={() => onClick(index)}>
        <p className="faq-question gradient-title">{content.title}</p>
        <div className="faq-icon">
          <img loading={`lazy`} src={chevron} alt="chevron" />
        </div>
      </div>
      <div className="faq-answer-content" ref={contentRef}>
        <p>{content.text}</p>
      </div>
    </div>
  );
};
