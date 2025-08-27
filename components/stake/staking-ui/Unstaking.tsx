"use client";

import React, { useState } from "react";
import MonInput from "./MonInput";
import StakeButton from "./StakeButton";
import { parseEther } from "viem";
import { useAccount } from "wagmi";
import useGetBalance from "~~/hooks/monbux/useGetBalance";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
// import toast from "react-hot-toast";

const Unstaking = ({ isStaking }: { isStaking: boolean }) => {
  const [amount, setAmount] = useState("");
  const { address: connectedAddress } = useAccount();
  const { monBalance, mMonBalance, isLoadingMonBalance, isLoadingmMONBalance } = useGetBalance();
  const { writeContractAsync: monUnstakeAsync, isMining } = useScaffoldWriteContract({ contractName: "StakingLST" });

  const handleStake = async () => {
    if (!connectedAddress || !amount) return;

    try {
      await monUnstakeAsync({
        functionName: "unstake",
        args: [parseEther(amount)],
      });
    } catch (e) {
      console.error("Error unstaking:", e);
      // toast.error("Unstaking failed");
    }
  };

  console.log({ isMining });
  return (
    <>
      <h3 className="text-2xl font-bold">Unstake Now</h3>
      <div className="flex flex-col gap-4">
        <MonInput
          isStaking={isStaking}
          amount={amount}
          setAmount={setAmount}
          isInput={true}
          mMONBalance={mMonBalance}
          isLoadingmMONBalance={isLoadingmMONBalance}
        />
        <MonInput
          isStaking={isStaking}
          amount={amount}
          setAmount={setAmount}
          isInput={false}
          monBalance={monBalance?.formatted}
          isLoadingMonBalance={isLoadingMonBalance}
        />
      </div>

      <div>
        <StakeButton isLoading={isMining} isStaking={isStaking} handleStake={handleStake} amount={amount} />
      </div>
    </>
  );
};

export default Unstaking;
