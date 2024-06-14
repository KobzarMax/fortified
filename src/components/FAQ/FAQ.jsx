import { Tag } from "../basic/Tag";
import { FaqItem } from "./FaqItem";
import { useState } from "react";
import "./FAQ.css";

const faqItems = [
  {
    title: "How does the content removal process work?",
    text: "Once you submit a removal request and complete the payment, our team of analysts will carefully review your request. If approved, we will engage with online providers to facilitate the removal of the specified content.",
  },
  {
    title: "What happens if my removal request is not approved?",
    text: "Fortified Web reserves the right to refuse any removal request deemed illegitimate or lacking sufficient evidence. If your request is not approved, we will provide you with an explanation, and if applicable, suggest steps to strengthen your case.",
  },
  {
    title: "How long does the content removal process take?",
    text: "We are committed to resolving issues promptly. If we are unable to remove the requested content within 60 days, a full refund will be issued. For cases extending beyond 60 days, we will keep you informed and offer options to proceed.",
  },
  {
    title: "Can I extend the resolution period if needed?",
    text: "Yes, if the resolution period is expected to exceed 60 days, we will contact you, explain the situation, and offer an estimated timeframe for resolution. You can choose to accept a refund or allow us to continue the process until an agreed-upon date.",
  },
  {
    title: "What is a Takedown or Content Removal?",
    text: "A takedown or content removal is the process of eliminating specific content from the web, addressing online impersonation, and protecting intellectual property. This could involve the removal of a page containing the content or removal of content without suspending an entire domain. Fortified Web reserves the right to refuse illegitimate requests or contact users by mail to explain the possibilities for complex cases.",
  },
  {
    title: "What happens after I make a payment?",
    text: "After completing your payment, our analysts will review your request. You will receive an email with detailed information about the process and the next steps. Please allow our team the necessary time to assess your request thoroughly.",
  },
  {
    title: "What if I have multiple takedown requests?",
    text: "If you have multiple takedown requests, we charge a fee per takedown. However, if your requests involve interconnected links (e.g., a website and its linked social account), we encourage you to reach out to us via email. Our specialists will assess your specific case and provide you with a tailored offer that addresses your multiple requests more comprehensively.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(undefined);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`faq`}>
      <div className={`faq-inner`}>
        <Tag type={"text"} text={`We’ve got answers`} />
        <h2 className={`faq-title gradient-title`}>
          Frequently Asked Questions
        </h2>
      </div>
      <div className={`faq-items-wrapper`}>
        {faqItems.map((faq, index) => (
          <FaqItem
            key={index}
            index={index}
            content={faq}
            isOpen={openIndex === index}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};
