import React from "react";
import { useEffect, useState } from "react";
import styles from "./style.module.css";

import { FormGirl } from "../../assets";

const Enquiryform = () => {
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
      
          const target = document.querySelector(`#EnquiryAni`);
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
    className={` ${styles.testimonialSection}  `}>
      <div className="containerLeftRight paddingTopBottom ">
        <h2 className={`${styles.HeadingName} uppercase `}> Enquiry Form</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  ">
          <div>
            <img
             id="EnquiryAni"
             className={`${styles.EnquiryAniClass} ${styles.ImgStyle}  ${
               isVisible ? styles.animateIn : ""
             }`}
              src={FormGirl}
              
              alt="Student Testimonials"
            />
          </div>

          <div className={`${styles.formStyle}  `}>
          <h2> Enquiry Form</h2>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiryform;
