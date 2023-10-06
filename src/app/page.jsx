import React from "react";
import styles from "./page.module.css";
import hero from "public/hero.png";
import Image from "next/image";
import Button from "@/components/Button/Button";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your idea into reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See My works" />
      </div>
      <div className={styles.item}>
        <Image src={hero} alt="hero" className={styles.img} />
      </div>
    </div>
  );
};

export default Home;
