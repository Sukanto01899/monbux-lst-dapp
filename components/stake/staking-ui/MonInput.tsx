import React from "react";
import Image from "next/image";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import { useWatchBalance } from "~~/hooks/scaffold-eth";

type MonInputProps = {
  amount: string;
  setAmount: (value: string) => void;
  isInput: boolean;
};

const MonInput = ({ amount, setAmount, isInput }: MonInputProps) => {
  const { address: connectedAddress } = useAccount();
  const {
    data: balance,
    isError,
    isLoading,
  } = useWatchBalance({
    address: connectedAddress,
  });
  const formattedBalance = balance ? Number(formatEther(balance.value)) : 0;

  const handleMaxClick = () => {
    const balanceString = formattedBalance.toString();
    setAmount(balanceString.length > 8 ? balanceString.slice(0, 12) : balanceString);
  };

  const inputControlHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 12) return;
    setAmount(value);
  };

  return (
    <div>
      <div className="flex justify-between">
        <p>{isInput ? "Stake MON" : "Received mMON"}</p>
        <p className="flex items-center gap-1">
          Balance:{" "}
          <span className="font-bold">
            {isError
              ? "Error"
              : formattedBalance.toString().length > 6
                ? formattedBalance.toString().slice(0, 6)
                : formattedBalance}{" "}
            MON
          </span>
        </p>
      </div>
      <div className="h-14 w-full border-1 border-gray-100 rounded-xl overflow-hidden px-12 relative">
        <Image
          className="absolute left-3 top-1/2 transform -translate-y-1/2"
          src="/favicon.png"
          alt="Mon"
          width={24}
          height={24}
        />
        <input
          type="number"
          placeholder="0.00"
          name=""
          id=""
          className="w-full h-full  focus:border-none focus:outline-none text-xl font-bold "
          value={amount}
          onChange={inputControlHandle}
        />

        {isInput && (
          <button
            disabled={isLoading}
            onClick={handleMaxClick}
            className="absolute bg-blue-500 px-2 cursor-pointer py-[1px] rounded-md text-sm font-bold right-3 top-1/2 transform -translate-y-1/2"
          >
            Max
          </button>
        )}
      </div>
    </div>
  );
};

export default MonInput;
