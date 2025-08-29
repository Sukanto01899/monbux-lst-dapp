import React from "react";

const ProgressBar = ({ totalMinted, maxSupply }: { totalMinted: number; maxSupply: number }) => {
  const progress = (totalMinted / maxSupply) * 100;
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-gray-400 mb-2">
        <span>Minted</span>
        <span>
          {totalMinted}/{maxSupply}
        </span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-500 mt-1">{progress.toFixed(1)}% minted</p>
    </div>
  );
};

export default ProgressBar;
