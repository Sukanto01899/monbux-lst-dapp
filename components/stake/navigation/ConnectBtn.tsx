import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import Image from "next/image";

export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useAppKit();
  const { address, isConnected, caipAddress, status, embeddedWalletInfo } =
    useAppKitAccount();

  return (
    <button
      className="bg-teal-500 text-white font-bold px-2 py-1 rounded-full cursor-pointer flex items-center gap-4"
      onClick={() => open(isConnected ? { view: "Account" } : undefined)}
    >
      {isConnected && (
        <Image src="/monad-logo.png" alt="Monad Logo" width={24} height={24} />
      )}
      {isConnected
        ? `${address?.slice(0, 3)}...${address?.slice(-4)}`
        : "Connect Wallet"}
    </button>
  );
}
