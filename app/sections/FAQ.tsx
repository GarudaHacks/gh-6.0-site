"use client";
import React, { useState } from "react";
import { faqData } from "../data/data";
import { FaPlus, FaMinus } from "react-icons/fa";
import Container from "../components/Container";

// Split FAQ data into two categories
const generalFAQs = faqData.filter((faq) => faq.category === "general");
const logisticsFAQs = faqData.filter((faq) => faq.category === "logistics");

const FAQColumn = ({
  faqs,
  title,
}: {
  faqs: typeof faqData;
  title: string;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex-1">
      <h3 className="text-2xl font-semibold mb-6 text-white">{title}</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-2 border-white rounded-[15px] overflow-hidden transition-all duration-300 ${
              activeIndex === index
                ? "bg-gradient-to-r from-[#FF0068] to-[#001745]"
                : "bg-[rgba(177,177,177,0.00)]"
            }`}
          >
            <button
              className="flex justify-between items-center w-full px-6 py-4 text-left text-white font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              <span className="pr-4">{faq.question}</span>
              {activeIndex === index ? (
                <FaMinus className="text-xl text-[#FF0068] flex-shrink-0" />
              ) : (
                <FaPlus className="text-xl text-[#FF0068] flex-shrink-0" />
              )}
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "max-h-40 opacity-100 py-4 px-6"
                  : "max-h-0 opacity-0 py-0 px-6"
              } overflow-hidden`}
            >
              <p className="text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <Container>
      <section
        id="faq"
        className="flex flex-col items-center min-h-[80vh] justify-center"
      >
        <h2 className="text-center text-3xl font-bold mb-12 text-white">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-[1200px]">
          <FAQColumn faqs={generalFAQs} title="General" />
          <FAQColumn faqs={logisticsFAQs} title="Logistics" />
        </div>
      </section>
    </Container>
  );
};

export default FAQ;
