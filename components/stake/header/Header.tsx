"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "~~/components/common/MobileMenu";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

const menus = [
  { name: "Stake", href: "/stake", live: true },
  { name: "Swap", href: "/swap", live: true },
  { name: "Batch Send", href: "/batch-send", live: true },
  { name: "NFT", href: "/nft/pioneer", live: true },
  { name: "Docs", href: "https://monbux.gitbook.io/docs", live: true },
];

const AppHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? " backdrop-blur-lg shadow-lg" : "bg-transparent"}`}
    >
      <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-1">
              <Image src="https://monbux.xyz/monbux-logo.png" alt="Monbux Logo" width={40} height={40} />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Monbux
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {menus.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-neutral-content cursor-pointer hover:text-indigo-500 px-3 py-2 text-md font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <RainbowKitCustomConnectButton />
          </div>
          <div className="md:hidden">
            <MobileMenu menus={menus} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
