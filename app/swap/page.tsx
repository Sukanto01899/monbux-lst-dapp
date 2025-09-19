import React from "react";
import { NextPage } from "next";
import SwapComponent from "~~/components/swap/Swap";

const SwapPage: NextPage = () => {
  return (
    <div className="min-h-screen p-4 lg:p-6 mt-16">
      <SwapComponent />
    </div>
  );
};

export default SwapPage;
