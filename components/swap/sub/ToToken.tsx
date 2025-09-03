import React from "react";
import TokenSelector from "./TokenSelector";
import { formatUnits } from "viem";
import { useAccount, useBalance } from "wagmi";
import { Token } from "~~/utils/monbux/types";

type FormTokenProps = {
  toAmount: string;
  setToAmount: (amount: string) => void;
  toToken: string;
  setToToken: (e: string) => void;
  tokens: Token[];
  isPriceLoading: boolean;
};

const ToToken = ({ toAmount, setToAmount, toToken, setToToken, tokens, isPriceLoading }: FormTokenProps) => {
  const selectedTokenData = tokens.find(token => token.symbol.toLowerCase() === toToken.toLowerCase());
  const { address } = useAccount();

  const { data: buyTokenBalance } = useBalance({
    address,
    token: toToken !== "mon" ? selectedTokenData?.address : undefined,
  });

  const formattedBalance = (balance: { value: bigint; decimals: number } | undefined) => {
    return balance ? formatUnits(balance?.value, balance?.decimals).slice(0, 6) : "0.00";
  };

  return (
    <div className="bg-gray-900 rounded-2xl py-4 px-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-400">To</span>
        <span className="text-gray-400 text-sm">
          {formattedBalance(buyTokenBalance)} {selectedTokenData?.symbol}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <input
          type="number"
          readOnly
          value={toAmount.slice(0, 6)}
          onChange={e => setToAmount(e.target.value.slice(0, 6))}
          placeholder="0.0"
          className={`${isPriceLoading && "animate-pulse"} cursor-not-allowed  bg-transparent  text-2xl sm:text-3xl text-white placeholder-gray-500 outline-none flex-1 mr-2 min-w-0`}
        />
        <div className="flex-shrink-0">
          <TokenSelector tokens={tokens} token={selectedTokenData!} onSelect={setToToken} label="To" />
        </div>
      </div>
      <div className="text-gray-400 text-sm mt-2">
        {/* ${toAmount ? (parseFloat(toAmount) * toToken.price).toFixed(2) : "0.00"} */}
      </div>
    </div>
  );
};

export default ToToken;
