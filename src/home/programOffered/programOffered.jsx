"use client";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import styles from "./style.module.css";
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext } from "@mui/lab";
import Carousel from 'react-bootstrap/Carousel'

const ProgramOffered = () => {
  

  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation when the section is in view
          } else {
            setIsVisible(false); // Reset the animation when section leaves the view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const target = document.querySelector(`#programOffersAni`);
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);


  return (
    <div id="programOffersAni"
    className={`${styles.programOffersAniClass} ${styles.programOfferedSection}  ${
      isVisible ? styles.animateIn : ""
    }`}>
      <div className={styles.ScrollTextBox}>
        <p className={styles.ScrollText}>
          <span className={styles.marqueeStyle}>
            &nbsp;Post Graduate Diploma in Public Healthy
          </span>
          <span className={styles.marqueeStyle2}>
            &nbsp;Post Graduate Diploma in Public Health&nbsp;
          </span>
        </p>
      </div>

      <div className="containerLeftRight paddingTopBottom">
        <div className={styles.blockzindex}>
          <div className="max-w-7xl mx-auto">
            {/* Title Section */}
            
            <div>
            <h2 
               className={` ${styles.HeadingName} uppercase `}>
             
             Program Offered at Indira University
                <br />
                (Proposed) Pune
            </h2>
          </div>
           



            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
               
                <TabPanel  className={`${styles.panelMargin} `} value="1">
                 
                <Carousel interval={1000} >
               
                    <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>•BBA (Rural and Agribusiness Management)</h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>	BBA (Hospitality and Tourism Management)</h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>
                   
                    <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>	BBA (Pharma & Healthcare Management)</h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>
                   
                    <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>	BBA (Operations & Supply Chain Management)</h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>
                   
                    <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>	MBA <br/> (Sports Management)</h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>
                   

                    <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>MBA <br/> (Business Analytics)</h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>	MBA (Rural and Agribusiness Management)</h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>MBA (Hospitality and Tourism Management)</h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>
                    </Carousel>

                
                </TabPanel>
                <TabPanel className={`${styles.panelMargin} `} value="2">
                  
                <Carousel interval={1000} >
                {/* <Carousel.Item>
                        <img src={HomePageBannerImage5} className='img_res' alt="Indira National School" />
                    </Carousel.Item> */}
                    <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>•	Bachelor of Arts in Performing Arts (Honours)</h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>•	Bachelor of Arts (Honours)</h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>•	Bachelor of Arts in Journalism and Mass Communication (Honours)</h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>•	Masters of Arts in Journalism and Mass Communication</h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>
               
                    </Carousel>
                </TabPanel>
                <TabPanel  className={`${styles.panelMargin} `} value="3">
                  
                <Carousel interval={1000} >
                {/* <Carousel.Item>
                        <img src={HomePageBannerImage5} className='img_res' alt="Indira National School" />
                    </Carousel.Item> */}
                    <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>•	B.Sc.(Computer Science)</h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>•	B.Sc. (Cyber Security)</h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>•	B.Sc.(Data Science)</h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>•	B.Sc. (Artificial Intelligence and Machine Learning)</h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>
               
                    </Carousel>
                </TabPanel>
                <TabPanel className={`${styles.panelMargin} `} value="4">
                 
                <Carousel interval={1000} >
                {/* <Carousel.Item>
                        <img src={HomePageBannerImage5} className='img_res' alt="Indira National School" />
                    </Carousel.Item> */}
                    <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>Bachelor of Commerce with honours  </h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>Bachelor of Commerce (Financial Markets) with honours  </h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>

 <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2 > Master of Commerce    (M.Com)  </h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>


 
                    </Carousel>

                </TabPanel>
                <TabPanel className={`${styles.panelMargin} `} value="5">
                
                <Carousel interval={1000} >
                {/* <Carousel.Item>
                        <img src={HomePageBannerImage5} className='img_res' alt="Indira National School" />
                    </Carousel.Item> */}
                    <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>B. Pharmacy </h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>M. Pharmacy (Pharmaceutics) </h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>

 <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>M. Pharmacy (Pharmaceutical Quality Assurance)  </h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>


 <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>M. Pharmacy (Pharmacology)  </h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>


 <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>Pharm D.  </h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>


 <Carousel.Item>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="..."></div>
                    <div className={`${styles.Programmedinnerbox} ...`}>
                      <h2>Ph. D (Pharmaceutical Sciences)  </h2>
                      <hr className="border-t-4 border-[#168DFF]" />
                      {/* <p>
                        Indira College of Engineering & Management has been
                        accredited by NAAC with B++ Grade
                      </p>
                      <hr className="border-t-4 border-[#168DFF]" /> */}
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="contained"
                        className="font-bold"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "none",
                          backgroundColor: "#FCCC00",
                          color: "#1B1B1B",
                        }}
                      >
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                    </Carousel.Item>

                    </Carousel>
 

                </TabPanel>
               
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                  >
                    <Tab
                      className={`${styles.TabName}`}
                      label="SCHOOL OF BUSINESS"
                      value="1"
                    />
                    <Tab
                      className={`${styles.TabName}`}
                      label="SCHOOL OF LIBERAL ARTS "
                      value="2"
                    />
                    <Tab
                      className={`${styles.TabName}`}
                      label="SCHOOL OF INFORMATION TECHNOLOGY"
                      value="3"
                    />
                    <Tab
                      className={`${styles.TabName}`}
                      label="SCHOOL OF COMMERCE & ECONOMICS"
                      value="4"
                    />
                    <Tab
                      className={`${styles.TabName}`}
                      label="SCHOOL OF PHARMACY"
                      value="5"
                    />
                   </Tabs>
                </Box>

              
              </TabContext>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramOffered;
