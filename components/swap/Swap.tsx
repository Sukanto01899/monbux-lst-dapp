"use client";

import { createContext, useState } from "react";
import { ExtendedPriceResponse, QuoteResponse } from "../../utils/monbux/types";
import PriceView from "./price";
import QuoteView from "./quote";
// import TokenModal from "./sub/TokenModal";
import { useAccount, useChainId } from "wagmi";

export const SwapContext = createContext({});

export default function SwapComponent() {
  const { address } = useAccount();

  const chainId = useChainId() || 1;

  const [finalize, setFinalize] = useState(false);
  const [price, setPrice] = useState<ExtendedPriceResponse | null>(null);
  const [quote, setQuote] = useState<QuoteResponse | undefined>();

  const closeModal = () => {
    setFinalize(false);
    setQuote(undefined);
  };

  return (
    <SwapContext.Provider value="">
      <PriceView taker={address} price={price} setPrice={setPrice} setFinalize={setFinalize} chainId={chainId} />

      {/* Modal Overlay */}
      {finalize && price && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => closeModal()}></div>
          <div className="relative bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-600/50 w-full max-w-md max-h-[80vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Review Trade</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto flex-1">
              <QuoteView
                taker={address}
                price={price}
                quote={quote}
                setQuote={setQuote}
                chainId={chainId}
                onClose={closeModal}
              />
            </div>
          </div>
        </div>
      )}
    </SwapContext.Provider>
  );
}
