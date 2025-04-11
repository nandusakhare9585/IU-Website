"use client";


import { Box } from "@mui/material";
import styles from "./style.module.css";
import { AIAward1, AIAward2, BrandSutra1, BrandSutra2, DewangMehta1, DewangMehta2, DewangMehtaBussiness1, DewangMehtaBussiness2, TNLAImg1, TNLAImg2 } from "../../assets";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [1, 2, 3, 4, 5];
  const handleSlideChange = (selectedIndex) => {
    setCurrentSlide(selectedIndex);
  };
  // const [isVisible, setIsVisible] = useState(false);
    
    
  //     useEffect(() => {
  //       const observer = new IntersectionObserver(
  //         (entries) => {
  //           entries.forEach((entry) => {
  //             if (entry.isIntersecting) {
  //               setIsVisible(true); // Trigger animation when the section is in view
  //             } else {
  //               setIsVisible(false); // Reset the animation when section leaves the view
  //             }
  //           });
  //         },
  //         { threshold: 0.5 } // Trigger when 50% of the section is visible
  //       );
    
  //       const target = document.querySelector(`#AwardsAni`);
  //       if (target) {
  //         observer.observe(target);
  //       }
    
  //       return () => {
  //         if (target) {
  //           observer.unobserve(target);
  //         }
  //       };
  //     }, []);

  return (
    <div 
    className={` ${styles.NewsSection} `} >
      <Box className="containerLeftRight paddingTopBottom">
      
         
      
        <Box>
          {/* Carousel Section */}
          <Carousel
            interval={10000}
            fade
            activeIndex={currentSlide}
            onSelect={handleSlideChange}
          >


            {/* First Slide */}
            <Carousel.Item>
              {/* Scrolling Marquee */}
              <div className={styles.ScrollTextBox}>
                <p className={styles.ScrollText}>
                  <span className={styles.marqueeStyle}>
                    The AI Congress & Awards [Artificial Intelligence]

                  </span>
                  <span className={styles.marqueeStyle}>
                    The AI Congress & Awards [Artificial Intelligence]

                  </span>
                </p>
              </div>

              <div
                className={`${styles.newsBoxOuter} grid grid-cols-1 sm:grid-cols-2 gap-4`}
              >
                <div className={`${styles.newsParaBox}`}>
                <div className={`${styles.hideclassMob}  `}>
            <div className="text-center mb-8">
              <h2 className={`${styles.HeadingName} uppercase`}>
              AWARDS AND<br/> ACCOLADES
              </h2>
            </div>
            </div>
            <div className={`${styles.showclassMob}  `}>
            <div className="text-center mb-8">
              <h2 className={`${styles.HeadingName} uppercase`}>
              AWARDS AND ACCOLADES
              </h2>
            </div>
            </div>
                

                  <h3 className={`${styles.midumHeading}`}>
                    The AI Congress & Awards [Artificial Intelligence]
                  </h3>
                  <p>
                    On the 10th of October 2024, IGI hosted the AI Congress
                     & Awards, an event dedicated to exploring the remarkable
                      advancements in artificial intelligence. The congress commenced with 
                      
                      


                  </p>
                  <button> Know More</button>
                </div>

                <div className={`${styles.relativeBox}`}>
                  <img
                    src={AIAward1}
                    className={`${styles.PositionImages1}`}
                    alt="The AI Congress & Awards [Artificial Intelligence]
"
                  />
                  <img
                    src={AIAward2}
                    className={`${styles.PositionImages2}`}
                    alt="                The AI Congress & Awards [Artificial Intelligence]
"
                  />
                </div>
              </div>
            </Carousel.Item>

            {/* Second Slide */}
            <Carousel.Item>
              {/* Scrolling Marquee */}
              <div className={styles.ScrollTextBox}>
                <p className={styles.ScrollText}>
                  <span className={styles.marqueeStyle}>
                    Brand Sutra Summit & Awards 2024
                  </span>
                  <span className={styles.marqueeStyle2}>
                    Brand Sutra Summit & Awards 2024
                  </span>
                </p>
              </div>

              <div
                className={`${styles.newsBoxOuter} grid grid-cols-1 sm:grid-cols-2 gap-4`}
              >
                <div className={`${styles.newsParaBox}`}>
                <div className={`${styles.hideclassMob}  `}>
            <div className="text-center mb-8">
              <h2 className={`${styles.HeadingName} uppercase`}>
              AWARDS AND<br/> ACCOLADES
              </h2>
            </div>
            </div>
            <div className={`${styles.showclassMob}  `}>
            <div className="text-center mb-8">
              <h2 className={`${styles.HeadingName} uppercase`}>
              AWARDS AND ACCOLADES
              </h2>
            </div>
            </div>
                

                  <h3 className={`${styles.midumHeading}`}>Brand Sutra Summit & Awards 2024

                  </h3>
                  <p>
                    Indira Group of Institutes (IGI) made a significant 
                    impact at the prestigious Brand Sutra
                     Summit & Awards 2024, held on November
                      22nd at the Taj Lands' End, Mumbai. 
                  
                      




                  </p>
                  <button> Know More</button>
                </div>

                <div className={`${styles.relativeBox}`}>
                  <img
                    src={BrandSutra1}
                    className={`${styles.PositionImages1}`}
                    alt="Brand Sutra Summit & Awards 2024
"
                  />
                  <img
                    src={BrandSutra2}
                    className={`${styles.PositionImages2}`}
                    alt="Brand Sutra Summit & Awards 2024

"
                  />
                </div>
              </div>
            </Carousel.Item>




            {/* Third Slide */}
            <Carousel.Item>
              {/* Scrolling Marquee */}
              <div className={styles.ScrollTextBox}>
                <p className={styles.ScrollText}>
                  <span className={styles.marqueeStyle}>
                    IGI Receives 11 Prestigious Awards at Dewang Mehta Awards 2024                </span>
                  <span className={styles.marqueeStyle2}>
                    IGI Receives 11 Prestigious Awards at Dewang Mehta Awards 2024                </span>
                </p>
              </div>

              <div
                className={`${styles.newsBoxOuter} grid grid-cols-1 sm:grid-cols-2 gap-4`}
              >
                <div className={`${styles.newsParaBox}`}>
                <div className={`${styles.hideclassMob}  `}>
            <div className="text-center mb-8">
              <h2 className={`${styles.HeadingName} uppercase`}>
              AWARDS AND<br/> ACCOLADES
              </h2>
            </div>
            </div>
            <div className={`${styles.showclassMob}  `}>
            <div className="text-center mb-8">
              <h2 className={`${styles.HeadingName} uppercase`}>
              AWARDS AND ACCOLADES
              </h2>
            </div>
            </div>
                

                  <h3 className={`${styles.midumHeading}`}>IGI Receives 11 Prestigious Awards at Dewang Mehta Awards 2024
                  </h3>
                  <p>
                    Indira Group of Institutes has achieved a significant
                     milestone by winning 11 prestigious awards
                      at the Dewang Mehta National Education Congress
                     
                     


                  </p>
                  <button> Know More</button>
                </div>

                <div className={`${styles.relativeBox}`}>
                  <img
                    src={DewangMehta1}
                    className={`${styles.PositionImages1}`}
                    alt="IGI Receives 11 Prestigious Awards at Dewang Mehta Awards 2024"
                  />
                  <img
                    src={DewangMehta2}
                    className={`${styles.PositionImages2}`}
                    alt="IGI Receives 11 Prestigious Awards at Dewang Mehta Awards 2024"
                  />
                </div>
              </div>
            </Carousel.Item>



            {/* Fourth Slide */}
            <Carousel.Item>
              {/* Scrolling Marquee */}
              <div className={styles.ScrollTextBox}>
                <p className={styles.ScrollText}>
                  <span className={styles.marqueeStyle}>
                    IGI Students Shine at Dewang Mehta Business School Affaire 2024
                  </span>
                  <span className={styles.marqueeStyle2}>
                    IGI Students Shine at Dewang Mehta Business School Affaire 2024
                  </span>
                </p>
              </div>

              <div
                className={`${styles.newsBoxOuter} grid grid-cols-1 sm:grid-cols-2 gap-4`}
              >
                <div className={`${styles.newsParaBox}`}>
                <div className={`${styles.hideclassMob}  `}>
            <div className="text-center mb-8">
              <h2 className={`${styles.HeadingName} uppercase`}>
              AWARDS AND<br/> ACCOLADES
              </h2>
            </div>
            </div>
            <div className={`${styles.showclassMob}  `}>
            <div className="text-center mb-8">
              <h2 className={`${styles.HeadingName} uppercase`}>
              AWARDS AND ACCOLADES
              </h2>
            </div>
            </div>
                

                  <h3 className={`${styles.midumHeading}`}>IGI Students Shine at Dewang Mehta Business School Affaire 2024

                  </h3>
                  <p>
                    Indira Group of Institutes students have once 
                    again demonstrated their exceptional 
                    talent and dedication by achieving remarkable 
                   



                  </p>
                  <button> Know More</button>
                </div>

                <div className={`${styles.relativeBox}`}>
                  <img
                    src={DewangMehtaBussiness1}
                    className={`${styles.PositionImages1}`}
                    alt="IGI Students Shine at Dewang Mehta Business School Affaire 2024"
                  />
                  <img
                    src={DewangMehtaBussiness2}
                    className={`${styles.PositionImages2}`}
                    alt="IGI Students Shine at Dewang Mehta Business School Affaire 2024"
                  />
                </div>
              </div>
            </Carousel.Item>


            {/* Five Slide */}
            <Carousel.Item>
              {/* Scrolling Marquee */}
              <div className={styles.ScrollTextBox}>
                <p className={styles.ScrollText}>
                  <span className={styles.marqueeStyle}>
                    IGI Honors Leaders at Tamil Nadu Leadership Awards 2024

                  </span>
                  <span className={styles.marqueeStyle2}>
                    IGI Honors Leaders at Tamil Nadu Leadership Awards 2024
                  </span>
                </p>
              </div>

              <div
                className={`${styles.newsBoxOuter} grid grid-cols-1 sm:grid-cols-2 gap-4`}
              >
                <div className={`${styles.newsParaBox}`}>
                <div className={`${styles.hideclassMob}  `}>
            <div className="text-center mb-8">
              <h2 className={`${styles.HeadingName} uppercase`}>
              AWARDS AND<br/> ACCOLADES
              </h2>
            </div>
            </div>
            <div className={`${styles.showclassMob}  `}>
            <div className="text-center mb-8">
              <h2 className={`${styles.HeadingName} uppercase`}>
              AWARDS AND ACCOLADES
              </h2>
            </div>
            </div>
                
                  <h3 className={`${styles.midumHeading}`}>IGI Honors Leaders at Tamil Nadu Leadership Awards 2024


                  </h3>
                  <p>
                    Indira Group of Institutes students have once again
                     demonstrated their exceptional talent and dedication
                      by achieving remarkable success at the 31st Dewang
                      



                  </p>
                  <button> Know More</button>
                </div>

                <div className={`${styles.relativeBox}`}>
                  <img
                    src={TNLAImg1}
                    className={`${styles.PositionImages1}`}
                    alt="IGI Honors Leaders at Tamil Nadu Leadership Awards 2024"
                  />
                  <img
                    src={TNLAImg2}
                    className={`${styles.PositionImages2}`}
                    alt="IGI Honors Leaders at Tamil Nadu Leadership Awards 2024
"
                  />
                </div>
              </div>
            </Carousel.Item>



          </Carousel>
        </Box>
      </Box>
    </div>
  );
};

export default News;
