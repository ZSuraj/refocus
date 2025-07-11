import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import PreorderButton from "./PreorderButton";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "When will I get access after preordering?",
      answer:
        "You'll receive an email with download instructions and your license key as soon as the early access version is ready.",
    },
    {
      question: "What's included in the $4.20 early access price?",
      answer:
        "You get lifetime access to ReFocus (no subscription), early access to the app, all future updates, and priority support. This is a one-time payment - the regular price will be $10 after launch.",
    },
    {
      question: "Will it support Windows or Linux?",
      answer:
        "ReFocus is designed specifically for macOS to provide the best native experience. We're focused on making it perfect for Mac users first, but may consider other platforms based on demand.",
    },
    {
      question: "Can I get a refund if I don't like it?",
      answer:
        "Absolutely! We offer a 30-day money-back guarantee. If ReFocus doesn't work for you, just email us and we'll process a full refund, no questions asked.",
    },
    {
      question: "How do you detect focus vs distraction?",
      answer:
        "ReFocus uses a combination of active window detection, application usage patterns, and optional text analysis (all processed locally). It learns your focus patterns over time while keeping everything private on your Mac.",
    },
    {
      question: "Is my data really private?",
      answer:
        "Absolutely. ReFocus runs entirely on your Mac with zero cloud connectivity. Your data never leaves your machine. We can't see your data even if we wanted to - it's architecturally impossible.",
    },
    {
      question: "What Mac models are supported?",
      answer:
        "ReFocus is built for Apple Silicon Macs (M1 and later). We're leveraging the latest technologies to deliver optimal performance and security on these modern architectures.",
    },
    // {
    //   question: "Can I customize the notifications?",
    //   answer: "Yes! You'll be able to customize notification frequency, tone, and even the types of messages ReFocus sends. It's your assistant, so it should work the way you want."
    // }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-red-50 to-teal-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about ReFocus
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you. Send us a message!
            </p>
            <a
              href="mailto:zsurajjain@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 via-red-500 to-teal-500 text-white rounded-full hover:from-orange-600 hover:via-red-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Final Preorder CTA */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-teal-500 rounded-2xl p-2 text-center">
            <div className="bg-white pt-6 rounded-xl">
              <h3 className="text-2xl text-orange-900 font-bold mb-4">
                Ready to stay focused?
              </h3>
              <p className="text-orange-900 mb-2">
                Join early adopters who are already securing their copy
              </p>
              <div className="b backdrop-blur-sm rounded-xl p-6">
                <PreorderButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
