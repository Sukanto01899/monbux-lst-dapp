import React from "react";
import AppFooter from "~~/components/stake/footer/Footer";
import AppHeader from "~~/components/stake/header/Header";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Monbux - Swap token",
  description: "Easily swap or trade token using Monbux",
});

const SwapLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
};

export default SwapLayout;
