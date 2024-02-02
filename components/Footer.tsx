import Image from "next/image";
import React, { useRef, useEffect } from "react";

const Footer = () => {
  const dateRef = useRef<HTMLParagraphElement | null>(null);
  useEffect(() => {
    let element: HTMLParagraphElement | null = dateRef.current;
    if (element) {
      element.innerText = String(new Date().getFullYear());
    }
  }, []);
  return (
    <footer className="container small">
      <span>
        <Image
          src="/icons/copyright.svg"
          width={18}
          height={18}
          alt="Copyright icon"
        ></Image>
        <p ref={dateRef}></p>
      </span>
      <div aria-hidden="true"></div>
      <p>designed & created by Paul Eboselume</p>
    </footer>
  );
};

export default Footer;
