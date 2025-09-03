import React from "react";
import TokenDetails from "./TokenDetails";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { MONAD_TESTNET_TOKENS } from "~~/utils/monbux/constants";

const TopTokens = () => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <ArrowTrendingUpIcon className="w-6 h-6 text-purple-400 mr-2" />
        Trending <span className="text-sm text-gray-200 mr-2"> ( Coming soon )</span>
      </h3>
      <div className="space-y-3">
        {MONAD_TESTNET_TOKENS.slice(0, 5).map(token => (
          <TokenDetails key={token.symbol} token={token} />
        ))}
      </div>
    </div>
  );
};

export default TopTokens;
