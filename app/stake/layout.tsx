import React from "react";
import { Header } from "~~/components/Header";

const StakeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default StakeLayout;
