"use client";

import React, { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import MonInput from "./MonInput";
import SelectOption from "./SelectOption";
import { parseEther } from "viem/utils";
import { useAccount } from "wagmi";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const Staking = () => {
  const [isStaking, setIsStaking] = useState(true);
  const [amount, setAmount] = useState("");
  const { address: connectedAddress } = useAccount();
  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract({ contractName: "StakingLST" });

  const handleStake = async () => {
    if (!connectedAddress || !amount) return;

    try {
      await writeYourContractAsync({
        functionName: "stake",
        value: parseEther(amount),
      });
    } catch (e) {
      console.error("Error staking:", e);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mt-14 gap-4">
      <SelectOption isStaking={isStaking} setIsStaking={setIsStaking} />

      <div className="w-[400px] md:w-[500px] p-6 border-2 border-base-100 rounded-xl space-y-6">
        <h3 className="text-2xl font-bold">Stake Now</h3>
        <div className="flex flex-col gap-4">
          <MonInput amount={amount} setAmount={setAmount} isInput={true} />
          <MonInput amount={amount} setAmount={setAmount} isInput={false} />
        </div>

        <button
          onClick={handleStake}
          className={`${!amount ? "bg-gray-700" : "bg-teal-500 hover:bg-teal-600 cursor-pointer"}  text-white text-xl font-bold py-3 px-4 rounded-xl w-full`}
        >
          {amount ? "Stake" : "Enter an amount"}
        </button>
      </div>

      <ExchangeRate />
    </div>
  );
};

export default Staking;
