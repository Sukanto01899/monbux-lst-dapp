import React from "react";

const StatsGrid = ({
  totalMinted,
  totalHolder,
  mintPrice,
}: {
  totalMinted: number;
  totalHolder: number;
  mintPrice: number;
}) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-base-300 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-white">{totalMinted ? totalMinted : "0"}</div>
        <div className="text-xs text-gray-400">Minted</div>
      </div>
      <div className="bg-base-300 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-white">{totalHolder ? totalHolder : "0"}</div>
        <div className="text-xs text-gray-400">Holders</div>
      </div>
      <div className="bg-base-300 rounded-lg p-4 text-center">
        <div className="text-2xl font-bold text-blue-400">{mintPrice ? (mintPrice > 0 ? mintPrice : "FREE") : "0"}</div>
        <div className="text-xs text-gray-400">Price</div>
      </div>
    </div>
  );
};

export default StatsGrid;
