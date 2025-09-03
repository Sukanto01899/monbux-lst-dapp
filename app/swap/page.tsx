import React from "react";
import { NextPage } from "next";
import AppFooter from "~~/components/stake/footer/Footer";
import AppHeader from "~~/components/stake/header/Header";
import SwapComponent from "~~/components/swap/Swap";

const SwapPage: NextPage = () => {
  return (
    <>
      <AppHeader />
      <SwapComponent />
      <AppFooter />
    </>
  );
};

export default SwapPage;
