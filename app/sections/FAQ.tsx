"use client";
import React, { useState } from "react";
import { faqData } from "../data/data";
import { FaPlus, FaMinus } from "react-icons/fa";
import Container from "../components/Container";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Container>
    <section id="faq" className="flex flex-col items-center">
      <h2 className="text-center text-3xl font-bold mb-8 text-white">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`w-[1010px] flex-shrink-0 border-2 border-white rounded-[15px] overflow-hidden transition-all duration-300 ${
              activeIndex === index
                ? "bg-gradient-to-r from-[#FF0068] to-[#001745]"
                : "bg-[rgba(177,177,177,0.00)]"
            }`}
          >
            <button
              className="flex justify-between items-center w-full px-6 py-4 text-left text-white font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              {activeIndex === index ? (
                <FaMinus className="text-xl text-[#FF0068]" />
              ) : (
                <FaPlus className="text-xl text-[#FF0068]" />
              )}
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-40 opacity-100 py-4 px-6" : "max-h-0 opacity-0 py-0 px-6"
              } overflow-hidden`}
            >
              <p className="text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </Container>
  );
};

export default FAQ;
