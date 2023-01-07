import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="container small">
      <span>
        <Image
          src="/icons/copyright.svg"
          width={18}
          height={18}
          alt="Copyright icon"
        ></Image>
        <p>2023</p>
      </span>
      <div aria-hidden="true"></div>
      <p>designed & created by Paul Eboselume</p>
    </footer>
  );
};

export default Footer;
