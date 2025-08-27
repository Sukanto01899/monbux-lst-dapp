"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";

const menus = [
  { name: "Home", href: "https://monbux.xyz", live: true },
  { name: "Stake", href: "https://stake.monbux.xyz", live: true },
  { name: "Swap", href: "#swap", live: false },
  { name: "Point", href: "#point", live: false },
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

  const menuClickHandler = (menu: { name: string; href: string; live: boolean }) => {
    if (!menu.live) return notification.info("Coming Soon!");

    window.open(menu.href, "_blank");
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-base-300 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="https://monbux.xyz" className="flex items-center gap-1">
            <Image src="/monbux-logo.png" alt="Monbux Logo" width={40} height={40} />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Monbux
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menus.map(item => (
                <button
                  key={item.name}
                  onClick={() => menuClickHandler(item)}
                  className="text-neutral-content cursor-pointer hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </button>
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
              className="text-gray-700 cursor-pointer hover:text-blue-600 focus:outline-none"
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
                <button
                  key={item.name}
                  onClick={() => menuClickHandler(item)}
                  className="text-neutral-content cursor-pointer hover:text-blue-600 block px-3 py-2 text-base font-medium"
                >
                  {item.name}
                </button>
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
