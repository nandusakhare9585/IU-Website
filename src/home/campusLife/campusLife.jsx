
import styles from "./style.module.css";
import { CampusLifeImg } from "../../assets";
import { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel'

const CampusLife = () => {
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
  
      const target = document.querySelector(`#campusLife`);
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
    <div>
      <div  id="campusLife"
               className={`${styles.CampusSection} ${styles.campusLife} ${
                 isVisible ? styles.animateIn : ""
               }`}>
        <div className={styles.ScrollTextBox}>
          <p className={styles.ScrollText}>
            <span className={styles.marqueeStyle}>
              &nbsp;IGI FILM CORPORATE &nbsp;
            </span>

            <span className={styles.marqueeStyle2}>
              &nbsp;IGI FILM CORPORATE&nbsp;
            </span>
          </p>
        </div>
        <div className=" containerLeftRight paddingTopBottom ">
          <h2  id="campusLife"
               className={`${styles.campusLife} ${styles.HeadingName} uppercase ${
                 isVisible ? styles.animateIn : ""
               }`} > Campus Life</h2>
         
         <Carousel interval={2000} >
              
                    <Carousel.Item>
                    <div
            className={`${styles.CampusParaBoxOuter} grid grid-cols-1 sm:grid-cols-2 gap-4 `}
          >
            <div 
               className={`${styles.CampusParaBox}  `} >
             
              <p>
              Experience the vibrant campus life at Indira University Pune. 
              </p>
              <button> Know More</button>
            </div>
            <div>

            <div className={`${styles.hideclassMob}  ${styles.marginTopVideo}`}>
            <iframe width="560" height="350" src="https://www.youtube.com/embed/gEXvD4OVyXg?si=z_Y4r75FN2HnCvZP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             
            </div>
            <div className={`${styles.showclassMob}  `}>
            <iframe width="350" height="315" src="https://www.youtube.com/embed/gEXvD4OVyXg?si=z_Y4r75FN2HnCvZP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             
            </div>


             
              
              {/* <img
              id="campusLife"
              className={`${styles.CampusImg}  ${styles.campusLife} uppercase ${
                isVisible ? styles.animateIn : ""
              }`}
               
                src={CampusLifeImg}
                alt=""
              /> */}
            </div>
          </div>

                    </Carousel.Item>
                    <Carousel.Item>
                    <div
            className={`${styles.CampusParaBoxOuter} grid grid-cols-1 sm:grid-cols-2 gap-4 `}
          >
            <div id="campusLife"
               className={`${styles.CampusParaBox} ${styles.campusLife} ${
                 isVisible ? styles.animateIn : ""
               }`} >
             
              <p>
              Experience the vibrant campus life at Indira University Pune. 
              </p>
              <button> Know More</button>
            </div>
            <div>

            <div className={`${styles.hideclassMob}  ${styles.marginTopVideo}`}>
            <iframe width="560" height="350" src="https://www.youtube.com/embed/CmtxfnibY0k?si=xCdVwhTufpflkOq_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
            </div>
            <div className={`${styles.showclassMob}  `}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/CmtxfnibY0k?si=xCdVwhTufpflkOq_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
            </div>


             
              
              {/* <img
              id="campusLife"
              className={`${styles.CampusImg}  ${styles.campusLife} uppercase ${
                isVisible ? styles.animateIn : ""
              }`}
               
                src={CampusLifeImg}
                alt=""
              /> */}
            </div>
          </div>

                    </Carousel.Item>
                   
 
 
                </Carousel>
        
          
        </div>
      </div>
    </div>
  );
};

export default CampusLife;
