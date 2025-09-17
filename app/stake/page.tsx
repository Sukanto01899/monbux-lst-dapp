import React from "react";
import { NextPage } from "next";
import StakeControl from "~~/components/stake/staking-ui";
import TVLAndHolder from "~~/components/stake/staking-ui/TVLAndHolder";

const StakePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black p-4 lg:p-6 mt-16">
      <StakeControl />
      <TVLAndHolder />
    </div>
  );
};

export default StakePage;
