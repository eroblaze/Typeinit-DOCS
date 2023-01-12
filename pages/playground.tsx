import React, { useRef, useEffect } from "react";
import Head from "next/head";

import Typeinit from "typeinit";

// let render = 0;

const playground = () => {
  const comingSoonRef = useRef<Typeinit>();

  useEffect(() => {
    // if (render === 1) {
    comingSoonRef.current = new Typeinit(".playground>h1", {
      caret: false,
    });

    comingSoonRef.current.play();
    // } else render += 1;
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
