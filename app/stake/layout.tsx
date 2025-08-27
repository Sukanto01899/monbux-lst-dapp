import React from "react";
import AppHeader from "~~/components/stake/header/Header";

const StakeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};

export default StakeLayout;
