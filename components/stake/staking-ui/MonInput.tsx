"use client";

import React from "react";
import Image from "next/image";

type MonInputProps = {
  amount: string;
  setAmount: (value: string) => void;
  isInput: boolean;
  isStaking: boolean;
  monBalance?: string | undefined;
  mMONBalance?: string | undefined;
  isLoadingMonBalance?: boolean | undefined;
  isLoadingmMONBalance?: boolean | undefined;
  isErrormMONBalance?: boolean | undefined;
  isErrorMonBalance?: boolean | undefined;
};

const MonInput = ({
  amount,
  setAmount,
  isInput,
  monBalance,
  mMONBalance,
  isStaking,
  isLoadingMonBalance,
  isLoadingmMONBalance,
  isErrorMonBalance,
  isErrormMONBalance,
}: MonInputProps) => {
  const handleMaxClick = () => {
    if (isStaking) {
      if (monBalance) setAmount(sliceBalance(monBalance));
    } else {
      if (mMONBalance) setAmount(sliceBalance(mMONBalance));
    }
  };

  const inputControlHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parseValue = parseFloat(value);
    if (parseValue < 0) return;
    setAmount(value);
  };

  const sliceBalance = (balance: string | undefined) => {
    if (!balance) return "0.00";
    const balanceString = balance.toString();
    return balanceString.length > 6 ? balanceString.slice(0, 6) : balanceString;
  };

  const getBalanceText = () => {
    if (isStaking) {
      if (isInput) {
        return isLoadingMonBalance ? "Loading..." : isErrorMonBalance ? "Error" : sliceBalance(monBalance) + " MON";
      } else {
        return isLoadingmMONBalance ? "Loading..." : isErrormMONBalance ? "Error" : sliceBalance(mMONBalance) + " mMON";
      }
    } else {
      if (isInput) {
        return isLoadingmMONBalance ? "Loading..." : isErrormMONBalance ? "Error" : sliceBalance(mMONBalance) + " mMON";
      } else {
        return isLoadingMonBalance ? "Loading..." : isErrorMonBalance ? "Error" : sliceBalance(monBalance) + " MON";
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <p>{isStaking ? (isInput ? "Stake MON" : "Received mMON") : isInput ? "Unstake mMON" : "Recevied MON"}</p>
        <p className="flex items-center gap-1">
          Balance: <span className="font-bold">{getBalanceText()}</span>
        </p>
      </div>
      <div className="h-14 w-full border-1 border-accent bg-base-300 rounded-xl overflow-hidden px-12 relative">
        <Image
          className="absolute left-3 top-1/2 transform -translate-y-1/2"
          src={
            isStaking
              ? isInput
                ? "https://monbux.xyz/monad-logo.png"
                : "https://monbux.xyz/monbux-logo.png"
              : isInput
                ? "https://monbux.xyz/monbux-logo.png"
                : "https://monbux.xyz/monad-logo.png"
          }
          alt="Mon"
          width={24}
          height={24}
        />
        <input
          type="number"
          placeholder="0.00"
          name="stake-amount"
          id=""
          className="w-full h-full  focus:border-none focus:outline-none text-xl font-bold "
          value={amount}
          onChange={inputControlHandle}
        />

        {isInput && (
          <button
            disabled={isLoadingmMONBalance || isLoadingMonBalance}
            onClick={handleMaxClick}
            className="absolute bg-accent px-2 cursor-pointer py-[1px] rounded-md text-sm font-bold right-3 top-1/2 transform -translate-y-1/2"
          >
            Max
          </button>
        )}
      </div>
    </div>
  );
};

export default MonInput;
