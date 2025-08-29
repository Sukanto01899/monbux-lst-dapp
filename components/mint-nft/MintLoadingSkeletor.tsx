import React from "react";

const MintLoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
      <div className="animate-pulse flex justify-center">
        <div className="text-lg">Wait a millisecond...</div>
      </div>
    </div>
  );
};

export default MintLoadingSkeleton;
