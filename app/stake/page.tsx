import React from "react";
import { NextPage } from "next";
import StakeControl from "~~/components/stake/staking-ui";
import TVLAndHolder from "~~/components/stake/staking-ui/TVLAndHolder";

const StakePage: NextPage = () => {
  return (
    <div>
      <StakeControl />
      <TVLAndHolder />
    </div>
  );
};

export default StakePage;
