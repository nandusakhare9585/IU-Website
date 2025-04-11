
import vector from "../../assets/HomePage/Vector.png";
import vector2 from "../../assets/HomePage/Vector (2).png";
import layer from "../../assets/HomePage/Layer_1.png";
import styles from "./style.module.css";
import { useEffect, useState } from "react";

const WhyIndiraUniversity = () => {
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

    const target = document.querySelector(`#whychoose`);
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
    <div className={styles.whychooseindiraSection}>
      <div className=" containerLeftRight paddingTopBottom ">
        {/* Wrapper for the section */}
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          
          <div>
            <h2 id="whychoose"
               className={`${styles.whychoose} ${styles.HeadingName} ${styles.hideclassMob} uppercase ${
                 isVisible ? styles.animateIn : ""
               }`}>
             
              Why Indira <br /> University?
            </h2>
          </div>
          <div>
            <h2 
               className={` ${styles.HeadingName} ${styles.showclassMob} uppercase 
               }`}>
             
              Why Indira University?
            </h2>
          </div>

          <div className={`${styles.hideclassMob}  `}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12 mt-[-70px] ml-72">
              {/* Academic Excellence */}
              <div 
               id="whychoose"
               className={`${styles.whychoose} academic-container relative bg-[#145684] text-center border-[8px] border-[#168DFF] p-6 h-[20px] w-[100px] md:h-[350px] md:w-[300px] lg:h-[200px] lg:w-[420px]  ${
                 isVisible ? styles.animateIn : ""
               }`}
             >
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 ">
                  <img
                    src={vector}
                    alt="Academic Icon"
                    width={100}
                    height={100}
                    style={{
                      marginTop: "-40px",
                      backgroundColor: "#145684",
                      padding: "12px",
                    }}
                  />
                </div>
                <h1 className={`${styles.headingwhychoose} uppercase `}>
                  {" "}
                  Academic Excellence
                </h1>
                <p className={`${styles.parawhychoose}  `}>
                  Indira University offers a comprehensive range of
                  globally-aligned programs designed to nurture critical
                  thinking, creativity, and innovation. 
                </p>
              </div>

              {/* Cutting-Edge Infrastructure */}
             
                
              <div 
               id="whychoose"
               className={`${styles.whychoose} infrastructure-container relative bg-[#145684] text-center border-[8px] border-[#168DFF] p-6 h-[320px] w-[300px] md:h-[370px] md:w-[340px] lg:h-[200px] lg:w-[380px] mx-auto left-14 ${
                 isVisible ? styles.animateIn : ""
               }`}
             >
                
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <img
                    src={layer}
                    alt="Infrastructure Icon"
                    width={100}
                    height={100}
                    style={{
                      marginTop: "-40px",
                      backgroundColor: "#145684",
                      padding: "12px",
                    }}
                  />
                </div>
                <h1 className={`${styles.headingwhychoose} uppercase `}>
                  {" "}
                  Cutting-Edge Infrastructure
                </h1>
                <p className={`${styles.parawhychoose}  `}>
                  {" "}
                  From state-of-the-art labs and smart classrooms to vibrant
                  collaborative spaces, our campus is designed to inspire and
                  support your academic journey.
                </p>
              </div>

              {/* Industry-Driven Learning */}
            
                
              <div 
               id="whychoose"
               className={`${styles.whychoose} industry-container relative bg-[#145684] text-center border-[8px] border-[#168DFF] p-4 h-[300px] w-[280px] md:h-[350px] md:w-[300px] lg:h-[200px] lg:w-[480px] right-72 mt-12 ${
                 isVisible ? styles.animateIn : ""
               }`}
             >
                
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <img
                    src={vector2}
                    alt="Learning Icon"
                    width={100}
                    height={100}
                    style={{
                      marginTop: "-40px",
                      backgroundColor: "#145684",
                      padding: "12px",
                    }}
                  />
                </div>
                <h1 className={`${styles.headingwhychoose} uppercase `}>
                  {" "}
                  Industry-Driven Learning
                </h1>
                <p className={`${styles.parawhychoose}  `}>
                  {" "}
                  We bridge the gap between academia and the corporate world
                  with strong industry partnerships, guest lectures,
                  internships, and placement opportunities with top global
                  brands.
                </p>
              </div>

              {/* Global Outlook with Indian Roots */}
             
               
               
              <div 
               id="whychoose"
               className={`${styles.whychoose} global-container relative bg-[#145684] text-center border-[8px] border-[#168DFF] p-6 h-[310px] w-[290px] md:h-[360px] md:w-[320px] lg:h-[210px] lg:w-[600px] right-44 mt-12 ${
                 isVisible ? styles.animateIn : ""
               }`}
             >
               
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <img
                    src={vector}
                    alt="Global Outlook Icon"
                    width={100}
                    height={100}
                    style={{
                      marginTop: "-40px",
                      backgroundColor: "#145684",
                      padding: "12px",
                    }}
                  />
                </div>
                <h1 className={`${styles.headingwhychoose} uppercase `}>
                  {" "}
                  Global Outlook with Indian Roots
                </h1>
                <p className={`${styles.parawhychoose}  `}>
                  {" "}
                  While embracing global educational standards, we take pride in
                  integrating Indian Culture and Knowledge Systems into our
                  programs, offering a unique learning perspective that prepares
                  you for a global career.
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.showclassMob}  `}>
            <div className="">
              {/* Academic Excellence */}
              <div className=" bg-[#145684] text-center border-[8px] border-[#168DFF] p-6  ">
                <img
                  src={vector}
                  alt="Academic Icon"
                  width={100}
                  height={100}
                  className={`${styles.imgwidth}  `}
                />

                <h1 className={`${styles.headingwhychoose} uppercase `}>
                  {" "}
                  Academic Excellence
                </h1>
                <p className={`${styles.parawhychoose}  `}>
                  Indira University offers a comprehensive range of
                  globally-aligned programs designed to nurture critical
                  thinking, creativity, and innovation. Our industry-vetted
                  curriculum ensures you’re always a step ahead in your chosen
                  field.
                </p>
              </div>

              {/* Cutting-Edge Infrastructure */}
              <div className=" bg-[#145684] text-center border-[8px] border-[#168DFF] p-6 mt-8">
                <img
                  src={layer}
                  alt="Infrastructure Icon"
                  width={100}
                  height={100}
                  className={`${styles.imgwidth}  `}
                />

                <h1 className={`${styles.headingwhychoose} uppercase `}>
                  {" "}
                  Cutting-Edge Infrastructure
                </h1>
                <p className={`${styles.parawhychoose}  `}>
                  {" "}
                  From state-of-the-art labs and smart classrooms to vibrant
                  collaborative spaces, our campus is designed to inspire and
                  support your academic journey.
                </p>
              </div>

              {/* Industry-Driven Learning */}
              <div className=" bg-[#145684] text-center border-[8px] border-[#168DFF] p-6  mt-8">
                <img
                  src={vector2}
                  alt="Learning Icon"
                  width={100}
                  height={100}
                  className={`${styles.imgwidth}  `}
                />

                <h1 className={`${styles.headingwhychoose} uppercase `}>
                  {" "}
                  Industry-Driven Learning
                </h1>
                <p className={`${styles.parawhychoose}  `}>
                  {" "}
                  We bridge the gap between academia and the corporate world
                  with strong industry partnerships, guest lectures,
                  internships, and placement opportunities with top global
                  brands.
                </p>
              </div>

              {/* Global Outlook with Indian Roots */}
              <div className=" bg-[#145684] text-center border-[8px] border-[#168DFF] p-6  mt-8">
                <img
                  src={vector}
                  alt="Global Outlook Icon"
                  width={100}
                  height={100}
                  className={`${styles.imgwidth}  `}
                />

                <h1 className={`${styles.headingwhychoose} uppercase `}>
                  {" "}
                  Global Outlook with Indian Roots
                </h1>
                <p className={`${styles.parawhychoose}  `}>
                  {" "}
                  While embracing global educational standards, we take pride in
                  integrating Indian Culture and Knowledge Systems into our
                  programs, offering a unique learning perspective that prepares
                  you for a global career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyIndiraUniversity;
