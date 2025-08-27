import React from "react";

const Faq = () => {
    const faqs = [
    {
      question: "Is Monbux secure?",
      answer:
        "Yes, Monbux uses audited smart contracts and follows best security practices. All transactions are transparent on the Monad blockchain.",
    },
    {
      question: "What are the fees?",
      answer:
        "There's a small admin fee for maintenance and development. All fees are transparent and displayed before transactions.",
    },
    {
      question: "How do I participate in Monad testnet?",
      answer: "Connect a testnet-compatible wallet, get testnet MON tokens, and start staking through our platform.",
    },
    {
      question: "Can I unstake immediately?",
      answer:
        "Yes! That's the power of liquid staking. You can unstake your mMON tokens anytime to receive your original MON",
    },
  ];
  return (
    <section id="faq" className="py-20 bg-base-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-content mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-base-200 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-neutral-content mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
