"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { Token } from "~~/utils/monbux/types";

type TokenModalProps = {
  modal: string;
  label: string;
  tokens: Token[];
  handleTokenSelect: (symbol: string) => void;
  selectedToken: Token;
};

const TokenModal = ({ modal, label, tokens, handleTokenSelect, selectedToken }: TokenModalProps) => {
  const [mounted, setMounted] = useState(false);
  const [element, setElement] = useState<Element | null>(null);

  useEffect(() => {
    // এই কাজটা শুধু client side এ হবে
    const modalRoot = document.getElementById("modal-root");
    if (modalRoot) {
      setElement(modalRoot);
      setMounted(true);
    }
  }, []);

  if (!mounted || !element) return null;
  return createPortal(
    <dialog id={modal} className="modal">
      {/* Backdrop */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
      {/* Modal */}
      <div className="modal-box overflow-hidden backdrop-blur-md">
        {/* Close btn */}
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>

        {/* Modal Header */}
        <div className="border-b border-gray-700/50">
          <h3 className="text-xl font-bold text-white">Select Token</h3>
          <p className="text-gray-400 text-sm mt-1">Choose a token to {label.toLowerCase()}</p>
        </div>

        {/* Search Bar */}
        <div className="py-2 border-b border-gray-700/50">
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
        <div className="overflow-y-auto max-h-72 px-2 py-1">
          {tokens.map(t => (
            <button
              key={t.symbol}
              onClick={() => {
                handleTokenSelect(t.symbol.toLowerCase());
              }}
              className={`${selectedToken.symbol === t.symbol && "bg-gray-700/50"} w-full flex items-center justify-between p-2 hover:bg-gray-700/50 rounded-xl cursor-pointer transition-all duration-200 hover:scale-[1.01]`}
            >
              <div className="flex items-center space-x-4">
                <Image src={t.logoURI} alt={t.symbol} width={40} height={40} className="rounded-full" />

                <div className="text-start">
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
            </button>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-gray-700/50 bg-gray-900/50">
          <div className="text-center text-xs text-gray-400">
            Can&apos;t find your token? Make sure it&apos;s added to your wallet
          </div>
        </div>
      </div>
    </dialog>,
    element,
  );
};

export default TokenModal;
