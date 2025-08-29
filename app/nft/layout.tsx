import React from "react";
import AppFooter from "~~/components/stake/footer/Footer";
import AppHeader from "~~/components/stake/header/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
};

export default layout;
