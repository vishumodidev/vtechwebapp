import { useState } from "react";
import useScrollAnimation from "../common/useScrollAnimation";

export default function FAQ() {
  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer:
        "You can enroll by submitting an enquiry through our website. Our counselors will guide you through course selection, batch schedules, and registration.",
    },
    {
      question: "Do you provide placement assistance?",
      answer:
        "Yes. We provide structured placement support including resume building, mock interviews, placement drives, and company referrals.",
    },
    {
      question: "Are the courses available online or offline?",
      answer:
        "We offer Online, Classroom, and Hybrid learning modes depending on the course and location.",
    },
    {
      question: "What is the Hire-Train-Deploy model?",
      answer:
        "It is a model where candidates are hired, trained as per company needs, and deployed directly into client projects after training.",
    },
    {
      question: "Do you offer corporate training programs?",
      answer:
        "Yes. We provide customized corporate training programs for enterprises including upskilling and workforce transformation.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [ref, visible] = useScrollAnimation();

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20 min-h-screen">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 animate-scroll ${
          visible ? "show" : ""
        }`}
      >
        {/* Heading */}
        <div className="mt-14 mb-8 text-center">
  <button
    className="
      inline-flex items-center justify-center
      px-8 py-3
      rounded-full
      bg-gradient-to-r from-teal-600 to-teal-500
      text-white font-semibold
      shadow-[0_10px_30px_rgba(13,148,136,0.35)]
      hover:shadow-[0_15px_40px_rgba(13,148,136,0.45)]
      transition-all duration-300 ease-out
    "
  >
    FAQ's
  </button>
</div>


        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border bg-white shadow-sm transition-all duration-300 ${
                activeIndex === index
                  ? "bg-purple-50 border-purple-200"
                  : "border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <div className="flex items-start gap-4">
                  {/* Left accent */}
                  <span className="w-1 h-6 bg-purple-600 rounded-full mt-1"></span>

                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                </div>

                {/* Plus / Minus */}
                <span className="text-purple-600 text-2xl font-bold">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed pl-5">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
