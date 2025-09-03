import React from "react";
import TokenSelector from "./TokenSelector";
import { formatUnits } from "viem";
import { useAccount, useBalance } from "wagmi";
import { AUTO_BALANCE_SET } from "~~/utils/monbux/constants";
import { Token } from "~~/utils/monbux/types";

type FormTokenProps = {
  fromAmount: string;
  setFromAmount: (amount: string) => void;
  fromToken: string;
  setFromToken: (e: string) => void;
  tokens: Token[];
};

const FormToken = ({ fromAmount, setFromAmount, fromToken, setFromToken, tokens }: FormTokenProps) => {
  const selectedTokenData = tokens.find(token => token.symbol.toLowerCase() === fromToken.toLowerCase());
  const { address } = useAccount();

  const { data: sellTokenBalance } = useBalance({
    address,
    token: fromToken !== "mon" ? selectedTokenData?.address : undefined,
  });

  const formattedBalance = (balance: { value: bigint; decimals: number } | undefined) => {
    return balance ? formatUnits(balance?.value, balance?.decimals).slice(0, 6) : "0.00";
  };

  const autoBalanceHandler = (percentage: number) => {
    if (!sellTokenBalance) return;
    const calculate = (parseFloat(formattedBalance(sellTokenBalance)) * percentage) / 100;

    setFromAmount(calculate.toString().slice(0, 6));
  };

  return (
    <div className="bg-gray-900 rounded-2xl p-4 mb-2">
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-400">From</span>
        <span className="text-gray-400 text-sm">
          Balance: {formattedBalance(sellTokenBalance)} {selectedTokenData?.symbol}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <input
          type="number"
          value={fromAmount}
          onChange={e => setFromAmount(e.target.value.slice(0, 12))}
          placeholder="0.0"
          className="bg-transparent text-2xl sm:text-3xl text-white placeholder-gray-500 outline-none flex-1 mr-2 min-w-0"
        />
        <div className="flex-shrink-0">
          <TokenSelector tokens={tokens} token={selectedTokenData!} onSelect={setFromToken} label="From" />
        </div>
      </div>
      <div className="space-x-2 mt-2">
        {AUTO_BALANCE_SET.map(s => (
          <button
            key={s.label}
            onClick={() => autoBalanceHandler(s.value)}
            className={`px-3 py-1 rounded-lg text-sm transition-colors bg-gray-700 hover:bg-gray-800 cursor-pointer text-gray-300 hover:bg-gray-600"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FormToken;
