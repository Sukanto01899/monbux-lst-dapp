"use client";

import React, { useEffect, useState } from "react";
import BatchSendButton from "./BatchSendBtn";
import Instructions from "./Instructions";
import RecipientsInput from "./RecipientsInput";
import { formatEther, parseEther } from "viem";
import { useAccount, useBalance, useWaitForTransactionReceipt } from "wagmi";
import { ArrowTopRightOnSquareIcon, CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

type Recipients = {
  address: string;
  amount: string;
};

const AllPasteBatchEthSender = () => {
  // Wagmi hooks
  const { address } = useAccount();
  const { data: balance } = useBalance({ address });

  // Contract interaction
  const {
    writeContractAsync,
    data: hash,
    isPending: isWriting,
    error: writeError,
  } = useScaffoldWriteContract({ contractName: "BatchSender" });
  //   const { writeContract, data: hash, isPending: isWriting, error: writeError } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

  // Component state
  const [recipientsText, setRecipientsText] = useState("");
  const [parsedRecipients, setParsedRecipients] = useState<Recipients[]>([]);
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isConfirmed) {
      setShowSuccess(true);
      setRecipientsText("");
      setParsedRecipients([]);
      // setTimeout(() => setShowSuccess(false), 5000);
    }
  }, [isConfirmed]);

  useEffect(() => {
    if (writeError) {
      setError("Transaction failed");
    }
  }, [writeError]);

  const parseRecipients = (text: string) => {
    if (!text.trim()) {
      setParsedRecipients([]);
      setError("");
      return;
    }

    try {
      const lines = text.trim().split("\n");
      const parsed = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue; // Skip empty lines

        const parts = line.split(",").map(part => part.trim());

        if (parts.length !== 2) {
          setError(`Line ${i + 1}: Invalid format. Use: address, amount`);
          setParsedRecipients([]);
          return;
        }

        const [address, amount] = parts;

        // Validate address format
        if (!address.match(/^0x[a-fA-F0-9]{40}$/)) {
          setError(`Line ${i + 1}: Invalid Ethereum address format`);
          setParsedRecipients([]);
          return;
        }

        // Validate amount
        const numAmount = parseFloat(amount);
        if (isNaN(numAmount) || numAmount <= 0) {
          setError(`Line ${i + 1}: Invalid amount. Must be a positive number`);
          setParsedRecipients([]);
          return;
        }

        parsed.push({ address, amount: amount });
      }

      if (parsed.length === 0) {
        setError("No valid recipients found");
        setParsedRecipients([]);
        return;
      }

      setParsedRecipients(parsed);
      setError("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError("Error parsing recipients: " + error.message);
      } else {
        console.error("An unknown error occurred.");
      }
      setError("An unknown error occurred.");
      setParsedRecipients([]);
    }
  };

  const handleRecipientsChange = (text: string) => {
    setRecipientsText(text);
    parseRecipients(text);
  };

  const validateInputs = () => {
    if (parsedRecipients.length === 0) {
      setError("Please enter at least one recipient");
      return false;
    }

    const totalAmount = getTotalAmount();
    const balanceInEth = balance ? parseFloat(formatEther(balance.value)) : 0;

    if (totalAmount > balanceInEth) {
      setError("Insufficient balance for this transaction");
      return false;
    }

    return true;
  };

  const sendBatchTransaction = async () => {
    if (!validateInputs()) return;

    setError("");

    try {
      const addresses = parsedRecipients.map(r => r.address);
      const amounts = parsedRecipients.map(r => parseEther(r.amount));
      const totalAmount = amounts.reduce((sum, amount) => sum + amount, 0n);

      await writeContractAsync({
        functionName: "batchSendEth",
        args: [addresses, amounts],
        value: totalAmount,
      });
    } catch (error) {
      if (error instanceof Error) {
        setError("Transaction failed");
      } else {
        console.error("An unknown error occurred.");
      }
    }
  };

  const getTotalAmount = () => {
    return parsedRecipients.reduce((sum, recipient) => {
      const amount = parseFloat(recipient.amount || "0");
      return sum + amount;
    }, 0);
  };

  //   const copyToClipboard = (text: string) => {
  //     navigator.clipboard.writeText(text);
  //   };

  return (
    <div className="min-h-screen  p-4 lg:p-6 mt-16">
      <div className="w-full max-w-6xl mx-auto">
        <div className="base-bg rounded-2xl p-2 sm:p-4 md:p-8 base-border">
          <div className="text-center mb-8">
            <p className="text-neutral-content text-lg">
              Send MON to multiple addresses in one transaction using Monbux
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Recipients Input */}
            <RecipientsInput
              recipientsText={recipientsText}
              handleRecipientsChange={handleRecipientsChange}
              parsedRecipients={parsedRecipients}
            />

            <div>
              {/* Transaction Summary */}
              <div className="mb-6 p-2 sm:p-4 lg:p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center justify-between text-white">
                  <span className="font-semibold">Total Amount:</span>
                  <span className="text-2xl font-bold text-purple-400">{getTotalAmount().toFixed(4)} MON</span>
                </div>
                <div className="flex items-center justify-between text-white mt-2">
                  <span>Recipients:</span>
                  <span>{parsedRecipients.length}</span>
                </div>
                <div className="flex items-center justify-between text-white mt-2">
                  <span>Estimated Gas Savings:</span>
                  <span className="text-green-400">
                    ~{((parsedRecipients.length - 1) * 21000 * 0.7).toLocaleString()} gas
                  </span>
                </div>
              </div>

              {/* Error Display */}
              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-2">
                  <ExclamationCircleIcon className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-red-200">{error}</span>
                </div>
              )}

              {/* Success Display */}
              {showSuccess && hash && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-400" />
                    <span className="text-green-200 font-semibold">Transaction Sent Successfully!</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-300">Transaction Hash:</span>
                    <span className="font-mono text-green-300">
                      {hash.slice(0, 10)}...{hash.slice(-6)}
                    </span>
                    <a
                      href={`https://testnet.monadexplorer.com/tx/${hash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </a>
                  </div>
                  {isConfirming && <div className="text-yellow-400 text-sm mt-2">⏳ Confirming transaction...</div>}
                  {isConfirmed && <div className="text-green-400 text-sm mt-2">✅ Transaction confirmed!</div>}
                </div>
              )}

              {/* Send Button */}
              {/* <button
                onClick={sendBatchTransaction}
                disabled={isWriting || isConfirming || parsedRecipients.length === 0}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg flex items-center justify-center gap-3 hover:from-purple-700 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-6 h-6" />
                {isWriting ? "Sending..." : isConfirming ? "Confirming..." : "Send Batch Transaction"}
              </button> */}

              <BatchSendButton
                sendBatchTransaction={sendBatchTransaction}
                isWriting={isWriting}
                isConfirming={isConfirming}
                IsRecipientsAvailable={parsedRecipients.length === 0}
              />
            </div>
            {/* Instructions */}
          </div>
          <Instructions />
        </div>
      </div>
    </div>
  );
};

export default AllPasteBatchEthSender;
