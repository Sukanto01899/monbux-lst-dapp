import React from "react";

const AdditionalInfo = () => {
  return (
    <div className="mt-8 pt-6 border-t border-gray-800">
      <div className="text-sm text-gray-400 space-y-2">
        <div className="flex justify-between">
          <span>Network:</span>
          <span className="text-purple-400">Monad Testnet</span>
        </div>
        <div className="flex justify-between">
          <span>Contract:</span>
          <span className="text-blue-400 font-mono text-xs">0x1234...abcd</span>
        </div>
        <div className="flex justify-between">
          <span>Standard:</span>
          <span>ERC-721</span>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
