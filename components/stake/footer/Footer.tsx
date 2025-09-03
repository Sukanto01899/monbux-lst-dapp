import React from "react";
import Image from "next/image";

const AppFooter = () => {
  return (
    <div className="bg-base-300">
      <nav className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between">
        <a href="https://monbux.xyz" className="flex items-center gap-1">
          <Image src="https://monbux.xyz/monbux-logo.png" alt="Monbux Logo" width={40} height={40} />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Monbux
          </span>
        </a>

        <div className="flex items-center">
          <a
            href="https://www.monbux.xyz/terms"
            className="text-neutral-content cursor-pointer hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="https://www.monbux.xyz/privacy-policy"
            className="text-neutral-content cursor-pointer hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </nav>
    </div>
  );
};

export default AppFooter;
