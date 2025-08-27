"use client";

import { useEffect, useState } from "react";
import { useScaffoldReadContract, useWatchBalance } from "../scaffold-eth";
import { formatEther } from "viem";
import { useAccount } from "wagmi";

const useGetBalance = () => {
  const { address: connectedAddress } = useAccount();
  const [formatedmMon, setFormatedmMon] = useState("");
  const {
    data: monBalance,
    isError: isErrorMonBalance,
    isLoading: isLoadingMonBalance,
  } = useWatchBalance({
    address: connectedAddress,
  });
  const {
    data: BigmMONBalance,
    isLoading: isLoadingmMONBalance,
    isError: isErrormMONBalance,
  } = useScaffoldReadContract({
    contractName: "StakingLST",
    functionName: "balanceOf",
    args: [connectedAddress],
  });

  useEffect(() => {
    if (BigmMONBalance) {
      setFormatedmMon(formatEther(BigmMONBalance));
    }
  }, [BigmMONBalance]);

  return {
    monBalance,
    isErrorMonBalance,
    isErrormMONBalance,
    isLoadingMonBalance,
    isLoadingmMONBalance,
    mMonBalance: formatedmMon,
  };
};

export default useGetBalance;
