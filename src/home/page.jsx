"use client";
import { useEffect, useRef, useState } from "react";

import Banner from "./bannerSection/bannerSection";
import styles from "./style.module.css";
import News from "./news/news";
import UniversityStateSection from "./universityState/universityState";
import WhyIndiraUniversity from "./whychooseindira/whychooseindira";
import ProgramOffered from "./programOffered/programOffered";
import Studenttestimonials from "./studenttestimonials/studenttestimonials";
import Enquiryform from "./enquiryform/enquiryform";
import Footer from "../components/Footer";
import CampusLife from "./campusLife/campusLife";
import AwardsAndAccolades from "./awardsAndAccolades/awardsAndAccolades";

const Home = () => {



  return (
    <div className={styles.container}>
      <div
        id="page1"
        className={`${styles.loadPage} `}
     
      >
        <Banner />
      </div>

      <div
        id="page2"
        className={`${styles.loadPage} `}
        
      >
        <UniversityStateSection />
      </div>

      <div
        id="page3"
        className={`${styles.loadPage} `}
       
      >
        <ProgramOffered />
      </div>
      <div
        id="page3"
        className={`${styles.loadPage} `}
       
      >
        <WhyIndiraUniversity />
      </div>


        <div
        id="page5"
        className={`${styles.loadPage} `}
       
      >
        <CampusLife />
      </div>
 
      <div
        id="page6"
        className={`${styles.loadPage} `}
       
      >
        <News />
      </div>
 
      <div
        id="page7"
        className={`${styles.loadPage} `}
       
      >
        <Studenttestimonials />
      </div>
 
      <div
        id="page8"
        className={`${styles.loadPage} `}
      
      >
        <AwardsAndAccolades />
      </div>
 
      <div
        id="page9"
        className={`${styles.loadPage} `}
       
      >
        <Enquiryform />
      </div>
 
      <div
        id="page10"
        className={`${styles.loadPage} `}
     
      >
        <Footer />
      </div>
    </div>

     
   
  );
};

export default Home;
