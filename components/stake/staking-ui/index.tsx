"use client";

import React, { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import SelectOption from "./SelectOption";
import Staking from "./Staking";
import Unstaking from "./Unstaking";

const StakeControl = () => {
  const [isStaking, setIsStaking] = useState(true);
  return (
    <div className=" w-full flex flex-col justify-center items-center gap-4">
      <SelectOption isStaking={isStaking} setIsStaking={setIsStaking} />

      <div className="w-[360px] sm:w-[400px] md:w-[500px] p-6 border border-gray-700/50 shadow-2xl rounded-xl space-y-6 bg-gray-800/50 backdrop-blur-xl">
        {isStaking ? <Staking isStaking={isStaking} /> : <Unstaking isStaking={isStaking} />}
      </div>

      <ExchangeRate />
    </div>
  );
};

export default StakeControl;
