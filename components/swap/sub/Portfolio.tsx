import React from "react";
import { WalletIcon } from "@heroicons/react/24/outline";

const Portfolio = () => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <WalletIcon className="w-6 h-6 text-purple-400 mr-2" />
        Portfolio <span className="text-sm text-gray-200 mr-2"> ( Coming soon )</span>
      </h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Total Value</span>
          <span className="text-2xl font-bold text-white">$0.00</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-300">24h Change</span>
          <span className="text-green-400 font-semibold">+$0.00 (+1.9%)</span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
