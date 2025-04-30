"use client";
import React, { useState } from "react";
import { faqData } from "../data/data";
import { FaPlus, FaMinus } from "react-icons/fa";
import Container from "../components/Container";
import { motion } from "framer-motion";

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
          <motion.div
            key={index}
            className={`border-2 border-white rounded-[15px] overflow-hidden`}
            initial={false}
            animate={{
              background:
                activeIndex === index
                  ? "linear-gradient(90deg, rgba(255,0,104,0.1) 0%, rgba(0,23,69,0.1) 100%)"
                  : "rgba(177,177,177,0.00)",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
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
            <motion.div
              className="overflow-hidden"
              initial={false}
              animate={{
                height: activeIndex === index ? "auto" : 0,
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{
                height: { duration: 0.3, ease: "easeInOut" },
                opacity: { duration: 0.2, ease: "easeInOut" },
              }}
            >
              <div className="px-6 py-4">
                <p className="text-sm">{faq.answer}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="max-w-[85vw] min-h-[100vh] md:min-h-[80vh] py-auto flex items-center">
      <Container>
        <motion.h2
          className="text-center text-3xl font-semibold mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-serif font-bold italic">F</span>
          requently <span className="font-serif font-bold italic">A</span>
          sked <span className="font-serif font-bold italic">Q</span>
          uestions
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 space-y-8 md:space-y-0 w-full max-w-[1200px]">
          <FAQColumn faqs={generalFAQs} title="General" />
          <FAQColumn faqs={logisticsFAQs} title="Logistics" />
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
