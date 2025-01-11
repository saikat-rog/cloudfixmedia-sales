import { useState } from "react";

export default function Faqs() {
    const [faqs, setFaqs] = useState([
        {
          question: "What services do you provide?",
          answer:
            "We offer end-to-end lead generation solutions, including:\n\n- Targeted ad campaigns\n- Scalable growth strategies\n- Comprehensive reporting and insights",
          open: false,
        },
        {
          question: "Who is this service for?",
          answer:
            "This service is for Indian e-commerce brands specializing in men’s fashion. Whether you’re a startup or an established brand, we can help you grow.",
          open: false,
        },
        {
          question: "What makes you different from other agencies?",
          answer:
            "We have 7+ years of experience and a proven track record in men’s fashion. With over ₹40 crore in ad spend, we understand the nuances of this niche and deliver campaigns that convert.",
          open: false,
        },
        {
          question: "How soon can I see results?",
          answer:
            "Results depend on your specific goals and current business status. However, most clients begin to see improvements within the first few weeks of working with us.",
          open: false,
        },
        {
          question: "How do I get started?",
          answer:
            "Simply click on the Get Started Now button or book your free strategy session today. Let’s kickstart your growth journey!",
          open: false,
        },
        {
          question: "How do you ensure ROI?",
          answer:
            "Our data-driven strategies focus on maximizing every rupee spent. We continuously test, optimize, and refine campaigns to deliver measurable results and sustainable growth.",
          open: false,
        },
        {
          question: "Do you offer a free consultation?",
          answer:
            "Yes! We offer a free strategy session to discuss your goals and how we can help achieve them.",
          open: false,
        },
      ]);
      

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : false, // Toggle only the clicked FAQ
      }))
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl md:text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`border rounded-lg p-3 mb-3 cursor-pointer transition-all duration-300 ${
            faq.open ? "bg-blue-50 border-accent2" : "bg-white border-gray-300"
          }`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="font-semibold text-gray-800 flex row justify-between space-x-2">
            <h1 className="text-sm md:text-xl">{faq.question}</h1>
            {faq.open && <div>-</div>}
            {!faq.open && <div>+</div>}
          </div>
          {faq.open && (
            <div className="mt-2 text-gray-600 text-xs md:text-sm">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
