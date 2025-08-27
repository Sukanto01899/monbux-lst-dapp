import React from "react";
import { NextPage } from "next";
import StakeControl from "~~/components/stake/staking-ui";

const StakePage: NextPage = () => {
  return (
    <div>
      <StakeControl />
    </div>
  );
};

export default StakePage;
