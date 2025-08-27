import React from "react";

const Stats = ({
  stats,
}: {
  stats: { totalStaked: number; totalMinted: number; uniqueStakers: number; transactions: number };
}) => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              {stats.totalStaked.toLocaleString()}
            </div>
            <div className="text-gray-600">Total MON Staked</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
              {stats.totalMinted.toLocaleString()}
            </div>
            <div className="text-gray-600">Total mMON Minted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              {stats.uniqueStakers.toLocaleString()}
            </div>
            <div className="text-gray-600">Unique Stakers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
              {stats.transactions.toLocaleString()}
            </div>
            <div className="text-gray-600">Total Transactions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
