"use client";

import React from "react";
import MintInterface from "./MintInterface";
import MintLoadingSkeleton from "./MintLoadingSkeletor";
import NFTPreview from "./NFTPreview";
import NftMintedSuccess from "./NftMintedSuccess";
import { useAccount } from "wagmi";
import useNftDetails from "~~/hooks/monbux/useNftDetails";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const MintNFT = () => {
  const { nftData, isLoadingNftData, isErrorNftData } = useNftDetails();
  const { address } = useAccount();
  const { data, isLoading, isError } = useScaffoldReadContract({
    contractName: "MonBuxPioneerNFT",
    functionName: "isHolder",
    args: [address],
  });

  return (
    <div className="min-h-screen  flex items-center justify-center p-4 mt-16">
      <div className="w-full max-w-6xl mx-auto">
        {isError || isErrorNftData ? <div>Error here, Please refresh this page.</div> : null}
        {isLoading || isLoadingNftData ? (
          <MintLoadingSkeleton />
        ) : data ? (
          <NftMintedSuccess />
        ) : (
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - NFT Preview */}
            <NFTPreview />

            {/* Right Side - Mint Interface */}
            <MintInterface nftData={nftData} isLoadingNftData={isLoadingNftData} isErrorNftData={isErrorNftData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MintNFT;
