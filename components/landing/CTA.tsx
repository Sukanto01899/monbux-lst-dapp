import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Earning?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of users already earning rewards through liquid staking on Monad testnet
        </p>
        <a
          href="https://stake.monbux.xyz"
          className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          Start Staking Now <ArrowRightIcon className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default CTA;
