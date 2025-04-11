"use client";

import styles from "./style.module.css";
import { UniversityStats1, UniversityStats2 , UniversityStats3 , UniversityStats4 , UniversityStats5 , UniversityStats6 , UniversityStats7 , UniversityStats8 } from "../../assets";

import Carousel from 'react-bootstrap/Carousel'
import { useEffect, useState } from "react";


const UniversityStateSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [1, 2, 3, 4]; // Example slides (replace with actual data if needed)

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
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
  
      const target = document.querySelector(`#UniversityStateAnimation`);
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
    <div  
    className={` ${styles.UniversityStateSection}   `}>
      <div id="UniversityStateAnimation"
    className={`${styles.UniversityStateAnimation} ${styles.UniversityStateSection}   ${
      isVisible ? styles.animateIn : ""
    }`}>
      {/* Static Section */}
      <div className="containerLeftRight paddingTopBottom">
        <h2 
               className={` ${styles.HeadingName} uppercase  }`}>University Stats</h2>
        <div className={`${styles.hideclassMob}  `}>
        <Carousel interval={1500} >
              
                    <Carousel.Item>
                    <div className="grid grid-cols-4 gap-4">
          <div 
               className={` ${styles.universityImgAlign}`  }>
            <img
              src={UniversityStats1}
              alt="icon"
              className={styles.UniversityStateSectionImg}
            />
          </div>
        
          <div  className={` ${styles.universityImgAlign}`  }>
            <img
              src={UniversityStats2}
              alt="icon"
              className={styles.UniversityStateSectionImg}
            />
          </div>
          <div  className={` ${styles.universityImgAlign}`  }>
            <img
              src={UniversityStats3}
              alt="icon"
              className={styles.UniversityStateSectionImg}
            />
          </div>
          <div  className={` ${styles.universityImgAlign}`  }>
            <img
              src={UniversityStats4}
              alt="icon"
              className={styles.UniversityStateSectionImg}
            />
          </div>
        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="grid grid-cols-4 gap-4">
          <div  className={` ${styles.universityImgAlign}`  }>
            <img
              src={UniversityStats5}
              alt="icon"
              className={styles.UniversityStateSectionImg}
            />
          </div>
          <div  className={` ${styles.universityImgAlign}`  }>
            <img
              src={UniversityStats6}
              alt="icon"
              className={styles.UniversityStateSectionImg}
            />
          </div>
          <div  className={` ${styles.universityImgAlign}`  }>
            <img
              src={UniversityStats7}
              alt="icon"
              className={styles.UniversityStateSectionImg}
            />
          </div>
          <div  className={` ${styles.universityImgAlign}`  }>
            <img
              src={UniversityStats8}
              alt="icon"
              className={styles.UniversityStateSectionImg}
            />
          </div> 
        </div>
                    </Carousel.Item>
                   
 
 
                </Carousel>
      </div>

       <div className={`${styles.showclassMob}  `}>
      <Carousel interval={1000} >
                {/* <Carousel.Item>
                        <img src={HomePageBannerImage5} className='img_res' alt="Indira National School" />
                    </Carousel.Item>  */}
                    <Carousel.Item>
                    <div className="grid grid-cols-2 gap-4">
          <div className={styles.universityImgAlign}>
            <img
              src={UniversityStats1}
              alt="icon"
              className={styles.UniversityStateSectionImg}
            />
          </div>
          <div className={styles.universityImgAlign}>
            <img
              src={UniversityStats2}
              alt="icon"
              className={styles.UniversityStateSectionImg}
            />
          </div>
         
        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="grid grid-cols-2 gap-4">
      
          <div className={styles.universityImgAlign}>
            <img
              src={UniversityStats3}
              alt="icon"
              className={styles.UniversityStateSectionImg}
            />
          </div>
          <div className={styles.universityImgAlign}>
            <img
              src={UniversityStats4}
              alt="icon"
              className={styles.UniversityStateSectionImg}
            />
          </div>
        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="grid grid-cols-2 gap-4">
          <div className={styles.universityImgAlign}>
            <img
              src={UniversityStats5}
              alt="icon"
              className={styles.UniversityStateSectionImg}
            />
          </div>
          <div className={styles.universityImgAlign}>
            <img
              src={UniversityStats6}
              alt="icon"
              className={styles.UniversityStateSectionImg}
            />
          </div>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="grid grid-cols-2 gap-4">
          <div className={styles.universityImgAlign}>
            <img
              src={UniversityStats7}
              alt="icon"
              className={styles.UniversityStateSectionImg}
            />
          </div>
          <div className={styles.universityImgAlign}>
            <img
              src={UniversityStats8}
              alt="icon"
              className={styles.UniversityStateSectionImg}
            />
          </div>
          </div>
       
                    </Carousel.Item>
                   
 
 
                </Carousel>
        </div> 
      </div>
      </div>
    </div>
  );
};

export default UniversityStateSection;
