import React from "react";

const Instructions = () => {
  return (
    <div className="mt-8 p-6 bg-blue-900/20 rounded-xl border border-blue-500/30">
      <h3 className="text-blue-400 font-semibold mb-3">📋 How to Use:</h3>
      <ol className="text-blue-200 space-y-2 text-sm">
        <li>1. Paste recipients in format: address, amount (one per line)</li>
        <li>2. Review the parsed recipients and total amount</li>
        <li>3. Click &quot;Send Batch Transaction&quot; to execute</li>
      </ol>
      <div className="mt-4 p-3 bg-blue-800/20 rounded-lg">
        <div className="text-xs text-blue-300 font-semibold mb-2">Example format:</div>
        <div className="font-mono text-xs text-blue-200 space-y-1">
          <div>0x742d35Cc6631C0532925a3b8D2Cc06d4f26b4532, 0.1</div>
          <div>0x8ba1f109551bD432803012645Hac136c96e3911E, 0.5</div>
          <div>0x40B38765696e3d5d7d08fcF7DEcD92dAE8e9F5E6, 1.2</div>
        </div>
      </div>
      <div className="mt-4 text-xs text-blue-300">
        💡 Batch sending saves gas by combining multiple transfers into one transaction!
      </div>
    </div>
  );
};

export default Instructions;
