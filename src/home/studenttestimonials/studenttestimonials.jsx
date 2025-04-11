"use client";

import { Box, Grid , Button} from "@mui/material";
import React, { useState,useEffect } from "react";

import {
  Studenttestimonials1,
  Studenttestimonials2,
  Studenttestimonials3,
  Studenttestimonials4,
} from "../../assets";
import styles from "./style.module.css";
import Carousel from "react-bootstrap/Carousel";

const Studenttestimonials = () => {
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
  
      const target = document.querySelector(`#tesiANi`);
      if (target) {
        observer.observe(target);
      }
  
      return () => {
        if (target) {
          observer.unobserve(target);
        }
      };
    }, []);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const testimonials = [
    {
      content:
        "From Nurturing our inner talents to eradicating the fear to speak up, Indira has polished my skills and added a shine to my personality. By participating in various events organised at college and inter college level, I have established my Leadership, time management and team skills and have also been able to advance these skills to whole new augment level. The professors have developed me to what I am today. With an attitude of being ever ready to help and not only delivering classroom teaching but also providing students with real time case studies and hands on industry experience with field project works , they are the pillars of the learning gained from this esteemed college and this is a treasure for life.",
      name: "Akshay Deokar",
      placement: "Engineer- Special Application Gemini Power Hydraulics",
      image: Studenttestimonials1,
    },
    {
      content:
        "I, Shubham Jain, would like to give my sincere gratitude to Indira University for helping me at each and every step of my professional career. The institute provided me with best possible platform and infrastructure to excel in my career interest. The expert faculty made me industry ready while the placement training helped me enhance my soft skills which made me stand out from the others. Being a member of various committees during my college days inculcated values and discipline which ultimately helped me to work abroad at Square yards as an intern in UAE and later got the placement in the same company in Oman.",
      name: "Shubham Jain",
      placement: " Square yards Dubai & Oman",
      image: Studenttestimonials2,
    },
    {
      content:
        "Indira has opened me to my fullest potential making me eligible to avail the opportunities out there. Throughout my time here I have been obliged with various responsibilities and tasks which has moulded my personality and leadership skills. I have encountered many amazing personalities here. The teachers at Indira university embody the purposefulness and give priority to student's growth and I have been privileged enough to be under their guidance as they know how to brush a stone to a diamond.",
      name: "Ms. Akansha Jain, BBA,",
      placement: " Founder & CEO - Central Convoy",
      image: Studenttestimonials3,
    },
    {
      content:
        "As a student in the Indira college, I gained both the skills and confidence to thoughtfully use a variety of quantitative approaches in my work. I had really amazing experience in Indira college of commerce and science. Faculties in each course were patient, understanding, supportive, motivating, friendly, and highly skilled. Indira college is a fantastic college that truly changed my career trajectory for the better!.",
      name: "Ms. Sayali Kale, MCA(Science)",
      placement: "iOS developer - Apple, San Jose, CA",
      image: Studenttestimonials4,
    },
  ];

  return (
    <div  id="tesiANi"
    className={`${styles.tesiANiClass} ${styles.testimonialSection}  ${
      isVisible ? styles.animateIn : ""
    }`}>
      <div className="containerLeftRight paddingTopBottom">
      <div className={styles.ScrollTextBox}>
          <p className={styles.ScrollText}>
            <span className={styles.marqueeStyle}>
              &nbsp; Student Testimonials &nbsp;
            </span>

            {/* <span className={styles.marqueeStyle2}>
              &nbsp; Student Testimonials&nbsp;
            </span> */}
          </p>
        </div>
        <h2 className={`${styles.HeadingName} uppercase`}>
          Student Testimonials
        </h2>
        <div >
        <Carousel interval={6000} fade>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <Grid container spacing={2} alignItems="center">
                {/* Left Empty Placeholder */}
                <Grid item xs={12} md={6}></Grid>
                {/* Testimonial Content */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    borderLeft: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p className={`${styles.studentpara} uppercase`}>
                    {expandedIndex === index
                      ? testimonial.content
                      : `${testimonial.content.substring(0, 220)}...`}
                  </p>
                  <button
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    className={styles.TestiButton}
                  >
                    {expandedIndex === index ? "Read Less" : "Read More"}
                  </button>
                  <Box sx={{ mt: 5 }}>
                    <img
                      src={testimonial.image}
                      className={styles.studentimg}
                      alt={`${testimonial.name} - Student Testimonial`}
                    />
                  </Box>
                  <Box sx={{ mt: 3 }}>
                    <p className={`${styles.studentName} uppercase`}>
                      {testimonial.name}
                    </p>
                    <p className={`${styles.studentName} uppercase`}>
                      {testimonial.placement}
                    </p>
                  </Box>
                </Grid>
              </Grid>
            </Carousel.Item>
          ))}
        </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Studenttestimonials;
