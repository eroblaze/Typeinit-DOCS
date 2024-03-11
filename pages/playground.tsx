import React, { useRef, useEffect } from "react";
import Head from "next/head";

import Typeinit from "typeinit";

const playground = () => {
  const comingSoonRef = useRef<Typeinit>();

  useEffect(() => {
    comingSoonRef.current = new Typeinit(".playground>h1", {
      caret: false
    });

    comingSoonRef.current.play();

    return () => {
      comingSoonRef.current?.reset();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Playground | Typeinit</title>
      </Head>
      <main className="container playground">
        <h1 className="h1">Coming Soon ...</h1>
      </main>
    </>
  );
};

export default playground;
