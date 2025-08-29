import React from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { UsersIcon } from "@heroicons/react/24/outline";

// type NftPreviewProps = {
//   nftData: any;
//   isLoadingNftData: boolean;
//   isErrorNftData: boolean;
// };

const NFTPreview = () => {
  return (
    <div className="order-2 lg:order-1">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 relative overflow-hidden">
            {/* NFT Preview Image */}
            <Image src="/pioneer.jpg" alt="NFT Preview" layout="fill" objectFit="cover" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className=" bg-opacity-60 backdrop-blur-sm rounded-lg p-3">
                <h3 className="text-white font-bold text-lg">MonBux Pioneer NFT</h3>
                <p className="text-gray-300 text-sm">Non-transferable • Utility Token</p>
              </div>
            </div>
          </div>

          {/* NFT Details */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">MonBux Pioneer NFT</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Exclusive non-transferable NFT for early MonBux community members. Grants special privileges and utility
                within the MonBux ecosystem.
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-blue-400">
                <UsersIcon className="h-6 w-6" />
                <span>Pioneer Access</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <CheckCircleIcon className="h-6 w-6" />
                <span>Non-transferable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTPreview;
