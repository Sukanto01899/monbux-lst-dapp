import React from "react";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";

// import { Token } from "~~/utils/monbux/types";

type MiddleSwapBtnProps = {
  fromToken: string;
  toToken: string;
  setFromToken: (token: string) => void;
  setToToken: (token: string) => void;
  setFromAmount: (amount: string) => void;
  setToAmount: (amount: string) => void;
};

const MiddleSwapBtn = ({
  fromToken,
  toToken,
  setFromToken,
  setToToken,
  setFromAmount,
  setToAmount,
}: MiddleSwapBtnProps) => {
  const swapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount("");
    setToAmount("");
  };
  return (
    <div className="flex justify-center -my-6">
      <button
        onClick={swapTokens}
        className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-600 hover:border-purple-500 transition-all duration-200 group"
      >
        <ArrowsUpDownIcon className="w-6 h-6 text-gray-300 group-hover:text-purple-400 transition-colors" />
      </button>
    </div>
  );
};

export default MiddleSwapBtn;
