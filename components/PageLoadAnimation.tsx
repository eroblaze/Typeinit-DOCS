import React, { useEffect } from "react";
import Typeinit from "typeinit";

let mount = 0;

const PageLoadAnimation = () => {
  useEffect(() => {
    mount++;
    if (mount === 1) return;

    new Typeinit(".page-load").type("Typeinit_");
  }, []);
  return <p className="page-load"></p>;
};

export default PageLoadAnimation;
