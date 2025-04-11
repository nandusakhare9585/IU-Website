import React from "react";
import styles from "../style.module.css";

import { ViceChancellor } from "../../assets";

const ViceChancellorsMessege = () => {
  return (
    <div
      className={styles.aboutSection}
      style={{
        backgroundColor: "white",
      }}
    >
      <div className=" containerLeftRight paddingTopBottom">
      <div className={styles.ScrollTextBox2}>
          <p className={styles.ScrollText}>
            <span className={styles.marqueeStyle}>
              &nbsp;   Vice Chancellors Message&nbsp;
            </span>

            <span className={styles.marqueeStyle2}>
              &nbsp;   Vice Chancellors Message &nbsp;
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 ">
          <div className="md:w-2/3 flex flex-col ">
            <h1 
            className={`${styles.AboutHeading} !text-[#1B1B1B] text-3xl uppercase sm:text-5xl mb-36 md:text-6xl`}
            >
              Vice Chancellors Message
            </h1>
            <p
              className={`${styles.AboutParaVice} `}
            >
              Together let’s create a better world and better future”. Is the philosophy deeply entrenched in the soul of Indira University (IU) and our faculty team.
            </p>
            <p
              className={`${styles.AboutParaVice}`}
            >
             Being in the field of education for above 30 years, we, at Indira University, have always believed that students' learning and growth are not confined to classroom and academic experience. At IU, students at all the levels are always exposed to carefully thought diversified extra-curricular and co-curricular activities. We are seized of the fact that today's students are tomorrow's citizens. Thus, we leave no stone unturned in broadening their thinking horizons and inculcating the right values in the young mind which not only make them value centred leaders but also responsible citizens of our great nation with global outlook. 
            </p>
            <p
            className={`${styles.AboutParaVice}`}
          >
           Our efforts of holistic education have further been realigned with the vision and mission of National Education Policy 2020. We have incorporated multi-disciplinary courses like performing arts, history, foreign language, culinary skills, wellness and yoga to name a few in all our UG and PG programs which go a long way in preparing our students to successfully face the challenges of the new century.
          </p>
          <p
            className={`${styles.AboutParaVice}`}
          >
            Our Internal Quality Assurance Cell (IQAC) ensures that students get to develop their thinking and problem-solving skills by participating in experiential learning and do it yourself (DIY) activities. Our students not only excel in their chosen field, but they also stand out in public life. At IU, we are conscious of the unique learning needs of the new generation students. Therefore, at UG and PG level, we allow them to choose subjects and modules based on their interests and career needs as a part of Choice Based Credit System (CBCS)
          </p>

        <p  className={`${styles.AboutParaVice}`}>Thousands of our successful alumni spread throughout the world bear testimony to our value based holistic learning. We stay ever committed to reinvent our teaching learning processes in line with the changing global environment and career aspirations of the students. </p>
<p  className={`${styles.AboutParaVice}`}>I welcome you to Indira University (IU) to experience a whole new refreshing journey of education to empowerment.</p>
          </div>
          <div className="md:w-1/3">
            <img src={ViceChancellor} alt="" className={`${styles.ImgTaritaMam} `} />
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default ViceChancellorsMessege;
