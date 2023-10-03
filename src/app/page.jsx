import React from "react";
import styles from "./page.module.css";
import hero from "public/hero.png";
import Image from "next/image";

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
        <button className={styles.button}>See My works</button>
      </div>
      <div className={styles.item}></div>
      <Image src={hero} alt="hero" className={styles.img} />
    </div>
  );
};

export default Home;
