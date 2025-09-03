import React from "react";

type SwapDetailsProps = {
  toAmount: string;
  priceImpact: string;
  toToken: {
    symbol: string;
    name: string;
  };
};

const SwapDetails = ({ toAmount, priceImpact, toToken }: SwapDetailsProps) => {
  return (
    <div className="bg-gray-900 rounded-xl p-4 mb-6 space-y-3">
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">Price Impact</span>
        <span className="text-green-400">&lt; {priceImpact}%</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">Min. received</span>
        <span className="text-white">
          {(parseFloat(toAmount) * 0.995).toFixed(6)} {toToken.symbol}
        </span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">Network fee</span>
        <span className="text-white">~$12.34</span>
      </div>
    </div>
  );
};

export default SwapDetails;
