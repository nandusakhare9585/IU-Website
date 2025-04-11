import React from "react";
import styles from "../style.module.css";
import { Box, Button, Grid } from "@mui/material";

import { IBF1, IBF2 } from "../../assets";

const OurInitiatives = () => {
  return (
    <div className={styles.OurInitiativesSection}>
      <div className=" containerLeftRight paddingTopBottom ">
        <h2 className={`${styles.OurInitiativesHeading} uppercase `}>
          {" "}
          Our Initiatives
        </h2>

        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <h3 className={`${styles.OurIBFHeading} uppercase `}>
              {" "}
              Indira Brain Festival
            </h3>

            <p className={`${styles.ourInitiativesparaPL} `}>
              The Indira Brain Festival is a unique platform where academic
              veterans from various fields engage with students to share their
              expertise and knowledge. This event serves as a golden opportunity
              for students to enrich their intellectual horizons, boost their
              self-confidence, and nurture critical thinking abilities. It aims
              to transcend traditional classroom boundaries and promote holistic
              education.
            </p>
            <h3 className={`${styles.ourInitiativesHeading2} uppercase `}>
              Join the Intellectual Journey:
            </h3>
            <p className={`${styles.ourInitiativespara}  `}>
              We invite students, educators, and lifelong learners to join us at
              the Indira Brain Festival and embark on a transformative journey
              of intellectual exploration. This is an unparalleled opportunity
              to connect with brilliant minds, expand your knowledge, and ignite
              your potential.
            </p>
            <p className={`${styles.ourInitiativesparaBold}  `}>
              Stay tuned for updates and event schedules on our website.
              Together, let us celebrate the boundless power of learning and
              innovation at the Indira Brain Festival!
            </p>

            <Button className={`${styles.KnowMoreBtn}  `}>Know More</Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className={`${styles.relativeBox}  `}>
              <Box>
                <img
                  src={IBF1}
                  className={`${styles.PositionImages1}  `}
                  alt="Indira Brain Festival"
                />
              </Box>
              <Box>
                <img
                  src={IBF2}
                  className={`${styles.PositionImages2}  `}
                  alt="Indira Brain Festival"
                />
              </Box>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default OurInitiatives;
