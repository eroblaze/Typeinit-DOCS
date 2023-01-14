import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

import Typeinit from "typeinit";

const CustomError = () => {
  const firstRef = useRef<Typeinit>();
  const secondRef = useRef<Typeinit>();

  useEffect(() => {
    secondRef.current = new Typeinit(".error__writings__container>h2", {
      caret: false,
    });

    firstRef.current = new Typeinit(".error__writings__container>h1", {
      caret: false,
      onEnd: () => {
        secondRef.current?.play();
      },
    });

    firstRef.current.play();

    return () => {
      firstRef.current?.reset();
      secondRef.current?.reset();
    };
  }, []);

  return (
    <>
      <Head>
        <title>404 Page Not Found | Typeinit</title>
      </Head>

      <main className="container error">
        <div className="error__writings__container">
          <h1 className="h1">404</h1>
          <h2 className="h2">PAGE NOT FOUND</h2>
        </div>
        <Link href="/">
          <button className="btn btn--gradient">Take me home</button>
        </Link>
      </main>
    </>
  );
};

export default CustomError;
