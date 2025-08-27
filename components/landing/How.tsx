import React from "react";

const How = () => {
  const steps = [
    {
      step: "01",
      title: "Connect Wallet",
      description: "Connect your wallet to the Monad testnet",
    },
    {
      step: "02",
      title: "Stake MON",
      description: "Choose amount and stake your MON tokens",
    },
    {
      step: "03",
      title: "Receive mMON",
      description: "Get liquid mMON tokens representing your stake",
    },
    {
      step: "04",
      title: "Unstake & Earn",
      description: "Unstake anytime to receive MON ",
    },
  ];
  return (
    <section id="how-it-works" className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-content mb-4">
            How It{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with liquid staking in just four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto shadow-lg">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-neutral-content mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default How;
