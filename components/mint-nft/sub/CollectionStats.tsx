import React from "react";

const CollectionStats = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-3xl font-bold text-white">{isActive ? "Live Mint" : "Mint Paused"}</h1>
      <div className="flex items-center gap-2 px-3 py-1 bg-green-600 bg-opacity-20 text-green-400 rounded-full text-sm">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        {isActive ? "Active" : "Inactive"}
      </div>
    </div>
  );
};

export default CollectionStats;
