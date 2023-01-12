import React from "react";
import Head from "next/head";

import SideNav from "./SideNav";

function DocsLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <Head>
        <title>{title} | Typeinit</title>
      </Head>

      <main className="container docs">
        <SideNav />
        {children}
      </main>
    </>
  );
}

export default DocsLayout;
