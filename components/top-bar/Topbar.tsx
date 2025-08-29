import React from "react";
import Image from "next/image";
import Link from "next/link";

const Topbar = () => {

  return (
    <Link
      href="https://www.monbux.xyz/nft/pioneer"
      className="fixed transform duration-500 hover:-translate-y-5 max-w-[100px] hover:opacity-60 cursor-pointer hover:shadow-lg rounded-lg overflow-hidden max-h-[150px] right-5 bottom-8 bg-gradient-to-b from-accent to-transparent text-neutral-content text-center py-2 text-sm"
    >
      <div className="flex justify-center rounded-lg overflow-hidden">
        <Image
          src="/pioneer.jpg"
          alt="Monbux Pioneer NFT"
          width={80}
          height={100}
          className="object-cover rounded-lg"
        />
      </div>
      <p className="text-xs font-bold">Pioneer NFT Minting Live!</p>
    </Link>
  );
};

export default Topbar;
