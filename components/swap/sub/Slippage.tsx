import React from "react";
import { SLIPPAGE_OPTIONS } from "~~/utils/monbux/constants";

type SlippageProps = {
  setSlippage: (slippage: number) => void;
  slippage: number;
};

const Slippage = ({ setSlippage, slippage }: SlippageProps) => {
  return (
    <div className="bg-gray-900 rounded-xl p-4 mb-6 border border-gray-600">
      <div className="flex items-center justify-between">
        <span className="text-white font-medium">Slippage</span>
        <div className="flex space-x-2">
          {SLIPPAGE_OPTIONS.map(s => (
            <button
              key={s.label}
              onClick={() => setSlippage(s.value)}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                slippage === s.value ? "bg-purple-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slippage;
