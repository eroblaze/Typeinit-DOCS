import Header from "./Header";
import Footer from "./Footer";
import React, { ReactNode } from "react";

const Layout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
