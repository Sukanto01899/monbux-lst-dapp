import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-neutral-content py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Monbux
            </div>
            <p className="text-gray-400 mb-4">
              The premier liquid staking platform for Monad testnet. Stake, earn, and grow your crypto portfolio with
              ease.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <div className="space-y-2">
              <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
              <a
                href="https://monbux.gitbook.io/docs"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Docs
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Telegram
              </a>
              <a href="https://x.com/monbux_xyz" className="block text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Discord
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Monbux. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
