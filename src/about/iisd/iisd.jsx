import React from "react";
import styles from "../style.module.css";
import { Box, Button, Grid } from "@mui/material";

import { IISD1, IISD2 } from "../../assets";

const IISD = () => {
  
  return (
    <div className={styles.OurInitiativesSection}>
      <div className=" containerLeftRight paddingTopBottom ">
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <h3 className={`${styles.OurIISDHeading} uppercase `}>
              {" "}
              Indira Information
            </h3>
            <h3 className={`${styles.OurIISDHeading} uppercase `}>
              {" "}
              Security Department
            </h3>
            <p className={`${styles.ourInitiativesparaPL} `}>
              IGI’s commitment to information security means that we employ
              cutting-edge technologies, innovative updated courses, robust
              policies, and continuous training to keep your data safe and
              secure. Whether you&apos;re a student accessing online resources,
              a faculty member sharing research data, or a staff member managing
              administrative systems, we prioritize your privacy and security
              every step of the way. With our comprehensive approach to
              information security, you can trust that your sensitive data is in
              good hands. We adhere to industry best practices, comply with
              relevant regulations, and remain vigilant against emerging threats
              to provide you with a safe and secure digital environment.
            </p>
            <p className={`${styles.ourInitiativespara}  `}>
              The trust of our stakeholders, employees and our students is our
              top priority, and we&apos;re dedicated to earning it every day
              through our unwavering commitment to information security. Welcome
              to a safer Online/Offline experience with Indira`s Information
              Security Department.
            </p>

            <Button className={`${styles.KnowMoreBtn}  `}>Know More</Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className={`${styles.relativeBox}  `}>
              <Box>
                <img
                  src={IISD2}
                  className={`${styles.PositionImages1}  `}
                  alt="Indira Information Security Department"
                />
              </Box>
              <Box>
                <img
                  src={IISD1}
                  className={`${styles.PositionImages2}  `}
                  alt="Indira Information Security Department"
                />
              </Box>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default IISD;
