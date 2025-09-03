import React from "react";
import Link from "next/link";
import { ArrowRightIcon, StarIcon, WalletIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <section className="pt-16 bg-gradient-to-br from-base-200 via-base-100 to-base-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-content mb-6">
              Liquid Staking <br />
              on{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Monad</span>
            </h1>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-xl md:text-2xl text-neutral-content mb-8 max-w-3xl mx-auto">
              Featuring MEV-boosted yield powered by the fastest Block Engine in crypto
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/stake"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              Stake Now <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link
              href="/swap"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Trade now
            </Link>
          </div>

          {/* Hero Illustration */}
          <div className="animate-fade-in-up animation-delay-600">
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 shadow-2xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <WalletIcon className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-neutral-content">MON Tokens</span>
                  </div>

                  <div className="flex items-center">
                    <ArrowRightIcon className="w-8 h-8 text-blue-600 animate-pulse" />
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <StarIcon className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-neutral-content">mMON</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
