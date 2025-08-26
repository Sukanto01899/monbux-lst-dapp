import Image from "next/image";
import React from "react";
import ConnectButton from "./ConnectBtn";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center px-8 space-x-8 bg-black h-16 border-b-1 border-teal-500">
      <div className="tex-xl flex items-center">
        <Image src="/logo.png" alt="MONBUX" width={80} height={80} />
        <h1 className="text-bold">MONBUX</h1>
      </div>

      <div className="space-x-8 hidden md:inline-flex">
        <a href="/docs">Stake</a>
        <a href="/docs">Swap</a>
        <a href="/docs">History</a>
      </div>

      <div className="space-x-8">
        <ConnectButton />
      </div>
    </nav>
  );
};

export default Navigation;
