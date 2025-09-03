import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Token } from "~~/utils/monbux/types";

type TokenSelectorProps = {
  token: Token;
  tokens: Token[];
  onSelect: (e: string) => void;
  label: string;
};

const TokenSelector = ({ token, onSelect, label, tokens }: TokenSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-xl transition-all duration-200 border border-gray-600 hover:border-purple-500 min-w-0"
      >
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
          <Image
            alt={token.logoURI}
            className="h-full w-full rounded-full border border-gray-200 dark:border-gray-600"
            src={token.logoURI}
            width={40}
            height={40}
          />
        </div>
        <div className="text-left hidden sm:block">
          <div className="text-white font-semibold">{token.symbol}</div>
          <div className="text-gray-400 text-xs">{token.name}</div>
        </div>
        <div className="text-left sm:hidden">
          <div className="text-white font-semibold">{token.symbol}</div>
        </div>
        <ChevronDownIcon className="w-4 h-4 text-gray-400" />
      </button>

      {/* Token Selection Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>

          {/* Modal */}
          <div className="relative bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-600/50 w-full max-w-md max-h-[80vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-4 border-b border-gray-700/50">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Select Token</h3>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-700 rounded-xl transition-colors">
                  <div className="w-5 h-5 text-gray-400 hover:text-white">✕</div>
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-1">Choose a token to {label.toLowerCase()}</p>
            </div>

            {/* Search Bar */}
            <div className="p-2 border-b border-gray-700/50">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search tokens..."
                  className="w-full bg-gray-900 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                />
                <div className="absolute right-3 top-3 text-gray-400">🔍</div>
              </div>
            </div>

            {/* Token List */}
            <div className="overflow-y-auto max-h-72 p-2">
              {tokens.map(t => (
                <div
                  key={t.symbol}
                  onClick={() => {
                    onSelect(t.symbol.toLowerCase());
                    setIsOpen(false);
                  }}
                  className={`${token.symbol === t.symbol && "bg-gray-700/50"} flex items-center justify-between p-2 hover:bg-gray-700/50 rounded-xl cursor-pointer transition-all duration-200 hover:scale-[1.02] mx-2 my-1`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      <Image src={t.logoURI} alt={t.symbol} width={50} height={50} />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">{t.symbol}</div>
                      <div className="text-gray-400 text-sm">{t.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    {/* <div className="text-white font-semibold">${t.price.toFixed(2)}</div>
                    <div
                      className={`text-sm font-medium ${t.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}
                    >
                      {t.change}
                    </div> */}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-700/50 bg-gray-900/50">
              <div className="text-center text-xs text-gray-400">
                Can&apos;t find your token? Make sure it&apos;s added to your wallet
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TokenSelector;
