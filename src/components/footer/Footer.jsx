import React from "react";
import Styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={Styles.container}>
      <div>©2023 Lancelot. All rights reserved.</div>
      <div className={Styles.social}>
        <Image
          src="/facebook.png"
          width={15}
          height={15}
          className={Styles.icon}
          alt="facebook"
        />
        <Image
          src="/instagram.png"
          width={15}
          height={15}
          className={Styles.icon}
          alt="instagram"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={Styles.icon}
          alt="twitter"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={Styles.icon}
          alt="youtube"
        />
      </div>
    </div>
  );
};

export default Footer;
