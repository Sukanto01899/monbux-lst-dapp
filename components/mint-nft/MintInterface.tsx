"use client";

import React from "react";
import MintButton from "./MintButton";
import AdditionalInfo from "./sub/AdditionalInfo";
import CollectionStats from "./sub/CollectionStats";
import ProgressBar from "./sub/ProgressBar";
import StatsGrid from "./sub/StatsGrid";
import { useAccount } from "wagmi";
import { BellAlertIcon, CheckCircleIcon, LinkIcon } from "@heroicons/react/24/outline";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

type MintInterfaceProps = {
  nftData: any;
  isLoadingNftData: boolean;
  isErrorNftData: boolean;
};

const MintInterface = ({ nftData }: MintInterfaceProps) => {
  const {
    writeContractAsync: mintPioneerNft,
    isMining: isMinting,
    isSuccess: mintSuccess,
    isError: error,
  } = useScaffoldWriteContract({
    contractName: "MonBuxPioneerNFT",
  });
  const { address } = useAccount();

  // Mock mint function
  const mintNFT = async () => {
    if (!address) return;

    try {
      await mintPioneerNft({
        functionName: "publicMint",
      });
    } catch (e) {
      console.error("Error staking:", e);
      // toast.error("Unstaking failed");
    }
  };

  return (
    <div className="order-1 lg:order-2">
      <div className="base-bg rounded-2xl p-8 base-border">
        {/* Collection Stats */}
        <div className="mb-8">
          <CollectionStats isActive={nftData?.isActive} />

          {/* Progress Bar */}
          <ProgressBar totalMinted={nftData?.totalMinted} maxSupply={nftData?.maxSupply} />

          {/* Stats Grid */}
          <StatsGrid
            mintPrice={nftData?.mintPrice}
            totalMinted={nftData?.totalMinted}
            totalHolder={nftData?.totalMinted}
          />
        </div>

        {/* Mint Success State */}
        {mintSuccess && (
          <div className="flex flex-col mb-4 gap-2 p-4 bg-green-600 bg-opacity-20 border border-green-600 border-opacity-50 rounded-lg">
            <div className="flex items-center gap-3">
              <CheckCircleIcon className="text-green-400 w-6 h-6" />
              <h3 className="text-neutral-content font-semibold">Mint Successful!</h3>
            </div>
            <p className="text-green-300 text-sm">Your MonBux Pioneer NFT has been minted successfully!</p>
            <a
              href="#"
              target="_blank"
              className=" bg-green-600 text-white rounded-lg text-sm hover:underline transition-colors flex items-center gap-2"
            >
              View on Explorer
              <LinkIcon className="w-6 h-6" />
            </a>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="mb-6 p-4 bg-red-600 bg-opacity-20 border border-red-600 border-opacity-50 rounded-lg">
            <div className="flex items-center gap-3">
              <BellAlertIcon className="text-red-400 w-24" />
              <div>
                <h3 className="text-red-400 font-semibold">Mint Failed</h3>
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Wallet Connection / Mint Button */}
        <div className="space-y-4">
          <MintButton mintNFT={mintNFT} isMinting={isMinting} isActive={nftData?.isActive} />

          <div className="text-center">
            <p className="text-gray-400 text-sm">First Come, First Served • One per wallet • Non-transferable</p>
          </div>
        </div>

        {/* Additional Info */}
        <AdditionalInfo />
      </div>
    </div>
  );
};

export default MintInterface;
