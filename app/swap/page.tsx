import React from "react";
import { NextPage } from "next";
import SwapComponent from "~~/components/swap/Swap";

const SwapPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black p-4 lg:p-6 mt-16">
      <SwapComponent />
    </div>
  );
};

export default SwapPage;
