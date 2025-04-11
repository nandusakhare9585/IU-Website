"use client";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import Video from "../../assets/HomePage/Indira40/WEBSITE-VIDEO.mp4"
import { Lightblup, Logo } from "../../assets";
import Header from "../../components/Header";

const Banner = () => {
  return (
    <div className={styles.container}>
      {/* Red overlay that slides out */}
      <div className={styles.redOverlay}></div>

      {/* Banner section immediately visible */}
      <div className={styles.banner}>
        {/* Background Video */}
        <video autoPlay loop playsInline  muted className={styles.backgroundVideo}>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay} ></div>
        {/* Banner Content */}
        <div className={styles.BackgroundBlock}>
          <div className={styles.LogoBox}>
            <img src={Logo} alt="icon" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 pt-16">
              <h1 className="uppercase ml-8">Indira University (Proposed) Pune</h1>
              <h4 className="uppercase ml-8">I Inspire, U Achieve</h4>
            </div>
            <div className="pt-16">
              <img src={Lightblup} className={styles.bulpImg} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
