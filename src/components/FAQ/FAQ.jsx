import {Tag} from "../basic/Tag";
import {FaqItem} from "./FaqItem";
import {useState} from "react";

const faqItems = [
    {
        title: 'How does the content removal process work?',
        text: 'Once you submit a removal request and complete the payment, our team of analysts will carefully review your request. If approved, we will engage with online providers to facilitate the removal of the specified content.'
    },
    {
        title: 'What happens if my removal request is not approved?',
        text: 'Once you submit a removal request and complete the payment, our team of analysts will carefully review your request. If approved, we will engage with online providers to facilitate the removal of the specified content.'
    },
    {
        title: 'How long does the content removal process take?',
        text: 'Once you submit a removal request and complete the payment, our team of analysts will carefully review your request. If approved, we will engage with online providers to facilitate the removal of the specified content.'
    },
    {
        title: 'Can I extend the resolution period if needed?',
        text: 'Once you submit a removal request and complete the payment, our team of analysts will carefully review your request. If approved, we will engage with online providers to facilitate the removal of the specified content.'
    },
    {
        title: 'What is a Takedown or Content Removal?',
        text: 'Once you submit a removal request and complete the payment, our team of analysts will carefully review your request. If approved, we will engage with online providers to facilitate the removal of the specified content.'
    },
    {
        title: 'What happens after I make a payment?',
        text: 'Once you submit a removal request and complete the payment, our team of analysts will carefully review your request. If approved, we will engage with online providers to facilitate the removal of the specified content.'
    },
    {
        title: 'What if I have multiple takedown requests?',
        text: 'Once you submit a removal request and complete the payment, our team of analysts will carefully review your request. If approved, we will engage with online providers to facilitate the removal of the specified content.'
    }
]

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`faq`}>
            <div className={`faq-inner`}>
                <Tag type={'text'} text={`We’ve got answers`} />
                <h2 className={`faq-title gradient-title`}>
                    Frequently Asked
                    Questions
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
    )
}

