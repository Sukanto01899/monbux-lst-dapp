import Image from "next/image";
import TokenModal from "./TokenModal";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Token } from "~~/utils/monbux/types";

type TokenSelectorProps = {
  token: Token;
  tokens: Token[];
  onSelect: (e: string) => void;
  label: string;
  modal: string;
};

const TokenSelector = ({ token, onSelect, label, tokens, modal }: TokenSelectorProps) => {
  const handleShowModal = () => {
    const modalElement = document.getElementById(modal) as HTMLDialogElement;
    if (modalElement) {
      modalElement.showModal();
    }
  };
  const handleCloseModal = () => {
    const modalElement = document.getElementById(modal) as HTMLDialogElement;
    if (modalElement) {
      modalElement.close();
    }
  };

  const handleTokenSelect = (tokenSymbol: string) => {
    onSelect(tokenSymbol.toLowerCase());
    // Small delay to ensure the selection is processed before closing
    setTimeout(() => {
      handleCloseModal();
    }, 50);
  };

  return (
    <>
      <button
        onClick={handleShowModal}
        className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-xl transition-all duration-200 border border-gray-600 hover:border-purple-500 min-w-0"
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
      <TokenModal
        modal={modal}
        tokens={tokens}
        selectedToken={token}
        handleTokenSelect={handleTokenSelect}
        label={label}
      />
    </>
  );
};

export default TokenSelector;
