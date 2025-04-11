"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import styles from "./style.module.css";
import { SrikantBolla1, SrikantBolla2, DeshKeSoormaImg1, DeshKeSoormaImg2 ,SanjayKumar1, SanjayKumar2, ISFImg1 , ISFImg2 } from "../../assets";
import Carousel from "react-bootstrap/Carousel";

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [1, 2 , 3 , 4 ]; // Example slides (adjust as needed)

  const handleSlideChange = (selectedIndex) => {
    setCurrentSlide(selectedIndex);
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

    const target = document.querySelector(`#NewsAni`);
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
    <div className={`${styles.NewsSection} p-0`}>
      <Box className="containerLeftRight paddingTopBottom">
   
 
<Box >
        {/* Carousel Section */}
        <Carousel
          interval={10000} 
          
          activeIndex={currentSlide}
          onSelect={handleSlideChange}
        >
        

          {/* First Slide */}
          <Carousel.Item>
            {/* Scrolling Marquee */}
            <div className={styles.ScrollTextBox}>
              <p className={styles.ScrollText}>
                <span className={styles.marqueeStyle}>
                  &nbsp;DESH KE SOORMA 2025 &nbsp; &nbsp;DESH KE SOORMA 2025 &nbsp;
                </span>
                <span className={styles.marqueeStyle}>
                  &nbsp;DESH KE SOORMA 2025&nbsp;&nbsp;DESH KE SOORMA 2025 &nbsp;
                </span>
              </p>
            </div>

            <div
               className={`${styles.newsBoxOuter} grid grid-cols-1 sm:grid-cols-2 gap-4`}
            >
              <div id="News"
               className={` ${styles.newsParaBox}  `}  >
              <div className={`${styles.hideclassMob}  `}>
            <div className="text-center mb-8">
              <h2 className={`${styles.HeadingName} uppercase`}>
              NEWS AND <br/> EVENT
              </h2>
            </div>
            </div>
            <div className={`${styles.showclassMob}  `}>
            <div className="text-center mb-8">
              <h2 className={`${styles.HeadingName} uppercase`}>
              NEWS AND  EVENT
              </h2>
            </div>
            </div>
         
    
                <h3 className={`${styles.midumHeading}`}>
                  Indira Survivor Festival  <br />4th Edition 'Desh Ke Soorma'
                </h3>
                <p>
                  The 4th edition of the Indira Survivor Festival IGI celebrates
                  the extraordinary achievements of India's para-athletes. The
                  event, hosted by the Indira Group of Institutes, honoured the
                  indomitable spirit of these athletes 
                </p>
                <button> Know More</button>
              </div>

              <div id="News"
               className={` ${styles.relativeBox} uppercase `} 
              >
                <img
                id="NewsAni"
                className={`${styles.NewsAniClass} ${styles.PositionImages1} ${
                  isVisible ? styles.animateIn : ""
                }`}
                  src={DeshKeSoormaImg1}
                
                  alt="Desh Ke Soorma event image 1"
                />
                <img
                  src={DeshKeSoormaImg2}
                  className={`${styles.PositionImages2}`}
                  alt="Desh Ke Soorma event image 2"
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
                Subedar Major Sanjay Kumar
                </span>
                <span className={styles.marqueeStyle2}>
                Subedar Major Sanjay Kumar
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
              NEWS AND <br/> EVENT
              </h2>
            </div>
            </div>
            <div className={`${styles.showclassMob}  `}>
            <div className="text-center mb-8">
              <h2 className={`${styles.HeadingName} uppercase`}>
              NEWS AND  EVENT
              </h2>
            </div>
            </div>
                <h3 className={`${styles.midumHeading}`}>Indira Survivor Festival 2024 <br/>Ft. Subedar Major Sanjay Kumar
                </h3>
                <p>
                Indira Group of Institutes proudly hosted the Indira Survivor
                 Festival 2024 on September 21st, 2024, following 
                 the success of the Indira Brain Festival. The event was 
                 inaugurated with great enthusiasm, welcoming  
               
              



                </p>
                <button> Know More</button>
              </div>

              <div className={`${styles.relativeBox}`}>
                <img
                  src={SanjayKumar1}
                  id="NewsAni"
                className={`${styles.NewsAniClass} ${styles.PositionImages1} ${
                  isVisible ? styles.animateIn : ""
                }`}
                  alt="Subedar Major Sanjay Kumar"
                />
                <img
                  src={SanjayKumar2}
                  className={`${styles.PositionImages2}`}
                  alt="Subedar Major Sanjay Kumar
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
                A Tribute to the Silkyara Tunnel Survivors
                </span>
                <span className={styles.marqueeStyle2}>
                A Tribute to the Silkyara Tunnel Survivors
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
              NEWS AND <br/> EVENT
              </h2>
            </div>
            </div>
            <div className={`${styles.showclassMob}  `}>
            <div className="text-center mb-8">
              <h2 className={`${styles.HeadingName} uppercase`}>
              NEWS AND  EVENT
              </h2>
            </div>
            </div>
                <h3 className={`${styles.midumHeading}`}>Indira Survivor Festival 2024 <br/>A Tribute to the Silkyara Tunnel Survivors
                </h3>
                <p>
                The Indira Group of Institutes was honoured to host Akhilesh
                 Singh and Saba Ahmed, the brave survivors of the Silkyara
                  Tunnel tragedy at the Indira Survivor Festival 2024.
                   Despite facing immense adversity, their 
                </p>
                <button> Know More</button>
              </div>

              <div className={`${styles.relativeBox}`}>
                <img
                  src={ISFImg1}
                  id="NewsAni"
                className={`${styles.NewsAniClass} ${styles.PositionImages1} ${
                  isVisible ? styles.animateIn : ""
                }`}
                  alt="A Tribute to the Silkyara Tunnel Survivors"
                />
                <img
                  src={ISFImg2}
                  className={`${styles.PositionImages2}`}
                  alt="A Tribute to the Silkyara Tunnel Survivors"
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
                  &nbsp;Mr. Srikanth Bolla &nbsp; &nbsp;Mr. Srikanth Bolla &nbsp;
                </span>
                <span className={styles.marqueeStyle2}>
                  &nbsp;Mr. Srikanth Bolla&nbsp;&nbsp;Mr. Srikanth Bolla&nbsp;
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
              NEWS AND <br/> EVENT
              </h2>
            </div>
            </div>
            <div className={`${styles.showclassMob}  `}>
            <div className="text-center mb-8">
              <h2 className={`${styles.HeadingName} uppercase`}>
              NEWS AND  EVENT
              </h2>
            </div>
            </div>
                <h3 className={`${styles.midumHeading}`}>Indira Survivor Festival 2024 <br/> 2nd edition Ft. Mr. Srikanth Bolla
                </h3>
                <p>
                On October 9th, 2024, the Indira Group of Institutes 
                proudly hosted the remarkable Mr. Srikanth Bolla 
                at the second edition of the Indira Survivor Festival.
                 His impactful words, “I was made blind by the perception
                 


                </p>
                <button> Know More</button>
              </div>

              <div className={`${styles.relativeBox}`}>
                <img
                  src={SrikantBolla1}
                  id="NewsAni"
                  className={`${styles.NewsAniClass} ${styles.PositionImages1} ${
                    isVisible ? styles.animateIn : ""
                  }`}
                  alt="Gusto 2024 cultural event"
                />
                <img
                  src={SrikantBolla2}
                  className={`${styles.PositionImages2}`}
                  alt="Another view of Gusto 2024"
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
