import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How do I track my order?",
      answer:
        "You can track your order by clicking the tracking link in your shipping confirmation email, or by logging into your account on our website and viewing your order history.",
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay for your convenience.",
    },
    {
      id: 3,
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return.",
    },
    {
      id: 4,
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to most countries. Shipping rates and delivery times vary by location.",
    },
    {
      id: 5,
      question: "How can I contact customer support?",
      answer:
        "Our customer support team is available 24/7 via email, phone, or live chat. You can also reach us through our contact form on the website.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-4">
          <div className="sticky top-4">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-500 mb-8">
              Can't find the answer you're looking for? We're here to help with
              any questions you may have about our products and services.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Ask a Question
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <AnimatePresence key={faq.id} mode="wait">
                <motion.div
                  className="border border-gray-200 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-500">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
