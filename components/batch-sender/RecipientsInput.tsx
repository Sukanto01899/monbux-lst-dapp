import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

type Recipients = {
  address: string;
  amount: string;
};

type RecipientsInputProps = {
  recipientsText: string;
  handleRecipientsChange: (value: string) => void;
  parsedRecipients: Recipients[];
};

const RecipientsInput = ({ recipientsText, handleRecipientsChange, parsedRecipients }: RecipientsInputProps) => {
  return (
    <div className="mb-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg md:text-2xl font-bold text-white">Recipients</h2>
        <div className="hidden md:block text-sm text-blue-300">Format: address, amount (one per line)</div>
      </div>

      <div className="p-2 md:p-6 bg-white/5 rounded-xl border border-white/10">
        <label className="block text-white mb-2 font-semibold">Paste Recipients (address, amount per line)</label>
        <textarea
          value={recipientsText}
          onChange={e => handleRecipientsChange(e.target.value)}
          placeholder={`0x742d35Cc6631C0532925a3b8D2Cc06d4f26b4532, 0.1
0x8ba1f109551bD432803012645Hac136c96e3911E, 0.5
0x40B38765696e3d5d7d08fcF7DEcD92dAE8e9F5E6, 1.2`}
          rows={8}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono text-sm resize-vertical"
        />
        <div className="text-xs text-gray-400 mt-2 space-y-1">
          <div>• One recipient per line</div>
          <div>• Format: address, amount (separated by comma)</div>
          <div>• Amount in ETH (e.g., 0.1 for 0.1 ETH)</div>
          <div>• Empty lines are ignored</div>
        </div>
      </div>

      {/* Parsed Recipients Preview */}
      {parsedRecipients.length > 0 && (
        <div className="p-6 bg-green-500/10 rounded-xl border border-green-500/20">
          <h3 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5" />
            Parsed Recipients ({parsedRecipients.length})
          </h3>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {parsedRecipients.map((recipient, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="font-mono text-green-300">
                  {recipient.address.slice(0, 8)}...{recipient.address.slice(-6)}
                </span>
                <span className="text-green-200 font-semibold">{recipient.amount} ETH</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipientsInput;
