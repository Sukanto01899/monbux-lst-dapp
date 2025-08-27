import React from "react";
import { ArrowTrendingUpIcon, BoltIcon, ChartBarIcon, ShieldCheckIcon, StarIcon } from "@heroicons/react/24/outline";

const Features = () => {
  const features = [
    {
      icon: <BoltIcon className="w-8 h-8" />,
      title: "Easy Staking & Unstaking",
      description: "Stake your MON tokens with just a few clicks. Unstake anytime without complex procedures.",
    },
    {
      icon: <ArrowTrendingUpIcon className="w-8 h-8" />,
      title: "Transparent Rewards",
      description: "Real-time exchange rates and reward tracking. See exactly how much you're earning.",
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Security & Admin Fee",
      description: "Secure smart contracts with transparent admin fees. Your funds are protected.",
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Complete Analytics",
      description: "Track total users, transactions, and your personal staking statistics.",
    },
    {
      icon: <StarIcon className="w-8 h-8" />,
      title: "Liquid Staking",
      description: "No lock-up periods. Your staked tokens remain liquid through mMON tokens.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-content mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Monbux</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the next generation of liquid staking with our secure and user-friendly platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-content mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
