
import React, { useState } from 'react';

interface FaqItemProps {
    question: string;
    answer: string;
}

const faqs: FaqItemProps[] = [
    {
        question: "What services does goMrezha offer?",
        answer: "goMrezha offers a comprehensive suite of services including web design and development, brand identity and logo design, UI/UX design, content creation, SEO, and digital marketing. We provide end-to-end solutions to elevate your brand's digital presence."
    },
    {
        question: "What industries does goMrezha work with?",
        answer: "We work with a diverse range of industries, from tech startups and SaaS companies to e-commerce brands and established corporate clients. Our strategies are tailored to the unique challenges and opportunities of each sector."
    },
    {
        question: "How long does a typical web design project take?",
        answer: "A typical web design project takes between 4 to 8 weeks, depending on the complexity, number of pages, and specific features required. We establish a clear timeline during the initial discovery phase."
    },
    {
        question: "Does goMrezha offer development along with design?",
        answer: "Absolutely. We are a full-service agency, which means we handle both the design (UI/UX) and the full-stack development to bring your vision to life as a fully functional, high-performing website or application."
    },
    {
        question: "What is the typical cost of a project with goMrezha?",
        answer: "Project costs vary based on scope and requirements. Our 'Basic Package' starts at $1,499. We recommend reaching out for a custom quote to get a precise estimate tailored to your specific needs."
    },
];

const FaqItem: React.FC<{ faq: FaqItemProps }> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-brand-gray-light">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-6 px-4 -mx-4 transition-colors hover:bg-brand-gray-light/20 rounded-lg"
            >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19" stroke="#A3A3A3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 12H19" stroke="#A3A3A3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <p className="text-brand-text-light pb-6 pr-8 pl-4">{faq.answer}</p>
            </div>
        </div>
    );
};

const Faq: React.FC = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
                    <p className="text-brand-text-light mt-4">Find answers to common queries about our services, pricing, and support. Ask now, to make informed decisions with confidence.</p>
                </div>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <FaqItem key={index} faq={faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;