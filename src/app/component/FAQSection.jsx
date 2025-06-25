 "use client"
 
 import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How can I donate?",
    answer:
      "You can donate by clicking the 'Donate Now' button on the homepage and choosing your preferred payment method.",
  },
  {
    question: "Where does my donation go?",
    answer:
      "100% of your donation supports the causes we list — including food, education, healthcare, and clean water.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Yes, we are a registered non-profit and your donations are eligible for tax deductions under applicable laws.",
  },
  {
    question: "Can I volunteer instead of donating?",
    answer:
      "Absolutely! We welcome volunteers. Please visit our 'Get Involved' page to learn more about opportunities.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-indigo-600" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>

              {activeIndex === index && (
                <p className="mt-3 text-sm text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
