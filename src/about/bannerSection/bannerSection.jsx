import React from "react";
import styles from "../style.module.css";
import { Logo } from "../../assets";

import Header from "../../components/Header";

const AboutBannerSection = () => {

  return (

    <div
      className={`${styles.bannerAboutUs} `}
    >
      <Header />
      <div className={`${styles.BackgroundBlock} mt-0`}>
        <div className={`${styles.LogoBox}`}>
          <img src={Logo} alt="icon" />
          {/* <p>indira university (proposed)</p> */}
        </div>
      </div>
    </div>
    
  );
};

export default AboutBannerSection;
