"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

const menus = [
  { name: "Stake", href: "/stake", live: true },
  { name: "Swap", href: "/swap", live: true },
  { name: "NFT", href: "/nft/pioneer", live: true },
  { name: "Documentation", href: "https://monbux.gitbook.io/docs", live: true },
  { name: "Faucet", href: "https://faucet.monad.xyz/", live: true },
];

const AppHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-base-300 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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
                  className="text-neutral-content cursor-pointer hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <RainbowKitCustomConnectButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-content cursor-pointer hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-base-100 border-t">
              {menus.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-content cursor-pointer hover:text-blue-600 block px-3 py-2 text-base font-medium"
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex justify-center items-center space-x-4  w-full">
                <RainbowKitCustomConnectButton />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default AppHeader;
