"use client";

import React from "react";
import NFTPreview from "./NFTPreview";
import { StarIcon } from "@heroicons/react/24/outline";

const NftMintedSuccess = () => {
  return (
    <div className="max-w-[500px] mx-auto">
      <div className="flex flex-col justify-center my-10 gap-3">
        <StarIcon className="w-12 h-12 mx-auto text-orange-400" />
        <h2 className="text-center text-neutral-content text-3xl font-bold">Congratulation!</h2>
        <h3 className="text-center text-green-500 text-xl font-semibold">
          Your MonBux Pioneer NFT is successfully minted.
        </h3>
      </div>
      <div className="">
        <NFTPreview />
      </div>
    </div>
  );
};

export default NftMintedSuccess;
