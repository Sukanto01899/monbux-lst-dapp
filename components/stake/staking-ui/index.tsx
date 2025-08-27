"use client";

import React, { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import SelectOption from "./SelectOption";
import Staking from "./Staking";
import Unstaking from "./Unstaking";

const StakeControl = () => {
  const [isStaking, setIsStaking] = useState(true);
  return (
    <div className="w-full flex flex-col justify-center items-center mt-24 gap-4">
      <SelectOption isStaking={isStaking} setIsStaking={setIsStaking} />

      <div className="w-[400px] md:w-[500px] p-6 border-2 border-accent rounded-xl space-y-6 bg-base-100">
        {isStaking ? <Staking isStaking={isStaking} /> : <Unstaking isStaking={isStaking}/>}
      </div>

      <ExchangeRate />
    </div>
  );
};

export default StakeControl;
