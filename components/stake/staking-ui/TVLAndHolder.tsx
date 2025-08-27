"use client";

import React from "react";
import { formatEther } from "viem";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const TVLAndHolder = () => {
  const { data: totalStakedMON, isLoading: isLoadingStakedMON } = useScaffoldReadContract({
    contractName: "StakingLST",
    functionName: "totalStakedMON",
  });
  const { data: totalUniqueStakers, isLoading: isLoadingUniqueStakers } = useScaffoldReadContract({
    contractName: "StakingLST",
    functionName: "totalUniqueStakers",
  });

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-base-200 rounded-3xl p-8 mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-bold text-neutral-content mb-2">Monbux TVL</h4>
            <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {isLoadingStakedMON ? "0" : totalStakedMON && parseInt(formatEther(totalStakedMON))} MON
            </span>
          </div>

          <div className="h-36 w-[1px] bg-gradient-to-b from-transparent via-neutral to-transparent hidden md:block"></div>

          <div className="flex flex-col items-center">
            <h4 className="text-xl font-bold text-neutral-content mb-2">Unique Stakers</h4>
            <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {isLoadingUniqueStakers ? "0" : totalUniqueStakers && totalUniqueStakers}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVLAndHolder;
