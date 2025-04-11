import React from "react";
import styles from "../style.module.css";
import { Box, Grid } from "@mui/material";

import { Vision, Mission } from "../../assets";

const VisionMision = () => {
  return (
    <div className={styles.visionSection}>
      <div className=" containerLeftRight paddingTopBottom ">
        <h2 className={`${styles.VisionMissionHeading} uppercase `}>
          {" "}
          Indira University - Vision Mission
        </h2>
        <h3 className={`${styles.VisionHeading} uppercase `}> Vision</h3>

        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <Box>
              <img
                src={Vision}
                className={`${styles.visionimg}  `}
                alt="Vision"
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <p className={`${styles.visionpara}  `}>
              {" "}
              To be a global Centre of academic excellence and a leader in
              higher education , distinguished for its innovative teaching,
              cutting edge research and commitment to societal impact, fostering
              an environment where students, faculty and staff thrive to create
              well literate, healthy and cultured society and a sustainable
              planet
            </p>
          </Grid>
        </Grid>

        <h3 className={`${styles.VisionHeading} uppercase `}>
          {" "}
          Mission
        </h3>

        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            {/* <List style={{color:'#ffffff',}}>
              <ListItem><ListItemText >To create globally competent and responsible human capital</ListItemText></ListItem>
              <ListItem><ListItemText >To promote value based and lifelong learning.</ListItemText></ListItem>
              <ListItem><ListItemText >To nurture inquisitiveness and creative thinking</ListItemText></ListItem>
              <ListItem><ListItemText >To inculcate human values</ListItemText></ListItem>
              <ListItem><ListItemText >To promote health and wellbeing amongst students and staff</ListItemText></ListItem>
              <ListItem><ListItemText >To instill environmental sensitivity amongst the youth</ListItemText></ListItem>
            </List> */}

            <ul className={`${styles.MisionUllist}  `}>
              <li>
              To create globally competent and responsible human capital.
              </li>
              <li>To promote value based and lifelong learning.</li>
              <li> To nurture inquisitiveness and creative thinking.</li>
              <li> To inculcate human values.</li>
              <li>
               To promote health and wellbeing amongst students and staff.
              </li>
              <li>To instil environmental sensitivity amongst the youth.</li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box>
              <img
                src={Mission}
                className={`${styles.misionimg}  `}
                alt="Mision"
              />
            </Box>
          </Grid>
        </Grid>
        <p className={`${styles.visionMisionpara}  `}>
          {" "}
          In our mission is to provide a transformational learning experience
          that fosters innovation and creativity. We create a community of
          collaboration and support, encouraging students to reach their full
          potential. Our students are not just equipped with the necessary
          knowledge, but also with the skills and confidence to thrive in this
          dynamic world. They graduate ready to lead, innovate, and make a
          lasting impact. Indira University believes in empowering individuals
          to achieve economic independence. We inspire our postgraduate students
          to carve their niche within the Indian economy and then confidently
          compete on a global scale. We deeply value the consistent
          collaboration with the Indian industry, which has been instrumental in
          this endeavor. Renowned industrialists have graced our campuses,
          enriching our students with their vast knowledge and experience, and
          fostering a vibrant spirit of entrepreneurship.
        </p>
        <p className={`${styles.visionMisionpara}  `}>
          At Indira University, we believe in fostering a growth mindset. We
          push boundaries, ignite curiosity, and encourage students to act
          beyond their boundaries. We provide an environment that fosters
          critical thinking and experiential learning opportunities, ensuring
          students are well-prepared for the challenges and opportunities that
          lie ahead.
        </p>
      </div>
    </div>
  );
};

export default VisionMision;
