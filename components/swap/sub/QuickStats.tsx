import React from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const QuickStats = () => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <InformationCircleIcon className="w-6 h-6 text-purple-400 mr-2" />
        Quick Stats <span className="text-sm text-gray-200 mr-2"> ( Coming soon )</span>
      </h3>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-300">TVL</span>
          <span className="text-white font-semibold">$0.0B</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">24h Volume</span>
          <span className="text-white font-semibold">$0.00M</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Active Users</span>
          <span className="text-white font-semibold">00.00</span>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
