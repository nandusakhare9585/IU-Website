"use client";
import Footer from "../components/Footer";
import AboutBannerSection from "./bannerSection/bannerSection";
import BoardOfTrustees from "./boardOfTrustee/boardOfTrustee";
import ChancellorsMessege from "./chancellorsMessege/chancellorsMessege";
import IISD from "./iisd/iisd";
import IndiraBrandSlam from "./indiraBrandSlam/indiraBrandSlam";
import IndiraFourty from "./indiraFourty/indiraFourty";
import IndiraLegacy from "./IndiraLegacy/IndiraLegacy";
import ISF from "./isf/isf";
import styles from "./style.module.css";
import ViceChancellorsMessege from "./viceChancellorsMessege/viceChancellorsMessege";
import VisionMision from "./visionMision/visionMision";
import OurInitiatives from "./ourInitiatives/ourInitiatives";
import React from "react";
import IndiraUniversity from "./indiraUniversity/indiraUniversity";

const About = () => {

  return (

    <div className={styles.container}>
      <div id="page1" className={styles.page1}>
        <AboutBannerSection />
      </div>
      <div id="page2">
        <IndiraUniversity />
      </div>
      <div id="page3" className={styles.page1}>
        <VisionMision />
      </div>
      <div id="page4" className={styles.page1}>
        <BoardOfTrustees />
      </div>
      <div id="page5" className={styles.page1}>
        <ChancellorsMessege />
      </div>
      <div id="page6" className={styles.page1}>
        <ViceChancellorsMessege />
      </div>
      <div id="page7" className={styles.page1}>
        <IndiraLegacy />
      </div>
      <div id="page8" className={styles.page1}>
        <OurInitiatives />
      </div>
      <div id="page9" className={styles.page1}>
        <IndiraBrandSlam />
      </div>
      <div id="page10" className={styles.page1}>
        <IISD />
      </div>
      <div id="page11" className={styles.page1}>
        <IndiraFourty />
      </div>
      <div id="page12" className={styles.page1}>
        <ISF />
      </div>
      <div id="page13">
        <Footer />
      </div>
     
    </div>
    
  );
};

export default About;
