import React from "react";

import Navbar from "../Navbar";
import Header from "components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="lg:w-[1400px] lg:mx-auto m-4">{children}</main>
    </>
  );
};
export default Layout;
