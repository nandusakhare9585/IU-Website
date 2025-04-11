import React from 'react';
import styles from '../style.module.css'; // Ensure this file exists and is correctly linked
import {IndiraUniversityimg } from '../../assets';
 
 
 
const IndiraUniversity = () => {
 
  return (
    <div className=" containerLeftRight paddingTopBottom">
 
    {/* <div className=" py-8"> */}
      {/* <div className="container mx-auto px-4"> */}
        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 ">
          {/* Left Side: Heading and Image */}
          <div className="md:col-span-4 flex flex-col  " >
            {/* Heading */}
            <div className=''>
            <h2 className={`${styles.IndiraUniversity} uppercase`}>
              Indira University
            </h2>
            <p className={`${styles.IndiraSubHeading} `}>
              Indira University Pune: Top <br /> Rated University in Pune
            </p>
            </div>
            {/* Image */}
            <div className="relative ">
              <img
                src={IndiraUniversityimg} // Replace with your image path
                alt="Graduation"
                className="IndiraUniversityimg"
              />
            </div>
          </div>
 
          {/* Right Side: Content */}
          <div className={`${styles.rightContent} md:col-span-8 `}>
            <p className={`${styles.IndiraUniversitypara} `}>
              Indira University is the epicentre of a thriving educational and professional ecosystem, boasting
              well-connected access to major employment hubs since 1994. For three decades, the Indira Group of
              Institutes (IGI) has stood as a beacon of education, innovation, and holistic growth. Today, as we evolve
              into Indira University, this milestone is not merely a transformation of name but a reflection of our
              deep-rooted commitment to the values that have defined us. It is the dawn of a new era, one that promises
              to carry the essence of our legacy forward for the next 300 years and beyond.
            </p>
            <p className={`${styles.IndiraUniversitypara} `}>
              Indira University as a brand deeply rooted in fostering holistic development, we believe that true
              progress is achieved when individuals thrive in body, mind, and environment. Through initiatives like the
              SOUL Program and the CARE Club, we are embedding these principles into the lives of our students, creating
              a legacy that extends far beyond our campuses.
            </p>
            <p className={`${styles.IndiraUniversitypara} `}>
              Indira University's journey commenced with a humble 60 students under SCES’s Indira Group of Institutes
              pursuing a single course. Through unwavering dedication and a commitment to growth, we have blossomed into
              a vibrant university with over 16,000 students from across India, engaged in multi-disciplinary graduate,
              postgraduate, and doctoral programs.
            </p>
            <p className={`${styles.IndiraUniversitypara} `}>
              Indira University emerges from a prosperous heritage, under the visionary leadership of Dr. Tarita
              Shankar. With a steadfast commitment to providing the best pedagogy, we offer a diverse range of programs
              in Business, Commerce & Economics, Liberal Arts, Information Technology, Pharmacy, and Doctoral Studies.
              Dr. Tarita Shankar's foresight recognized the need for an education that empowers individuals and fuels
              India's economic growth. As the nation navigated a challenging period, she envisioned an educational
              landscape that was both broad-based and vocational. This pioneering spirit in 1994 ignited a saga of
              academic excellence that continues to reach its zenith.
            </p>
          </div>
        </div>
      </div>
    // </div>
    // </div>
  );
}
 
export default IndiraUniversity;
 