import React from "react";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import styles from "../style.module.css";
import { Box,Grid} from "@mui/material";
import { Indira40 } from "../../assets";

const IndiraFourty = () => {

  return (
    <div className={`${styles.BrandSlamParaSection}`}>
      <div className="containerLeftRight paddingTopBottom">
            {/* Left Side */}
            <Grid container spacing={0}>
                        <Grid item xs={12} md={6}>
              
              <h1 className={`${styles.BrandSlamHeading} uppercase`}>Indira@40</h1>
              <p
                className={`${styles.BrandSlamPara} `}
              >
                For three extraordinary decades, Indira University has stood as
                a beacon of educational excellence and unwavering trust. These
                core values, deeply woven into our forward-thinking philosophy,
                propel us toward a future defined by Excellence with Empathy.
                Indira@40, an initiative spearheaded by our Chairperson and
                Chief Mentor, Dr. Tarita Shankar, marks the dawn of a new
                decade, a commitment to delivering an unparalleled educational
                experience. We embark on this exciting journey to map the path
                for the next ten years, embracing the theme Indira@40 to
                define, mold, and usher in a decade of excellence, empathy, and
                vibrant engagement.
                </p>
                <p
                className={`${styles.BrandSlamPara} `}
              >
                Our Chairperson & Chief Mentors visionary outlook seamlessly
                blends the lessons of the past and the achievements of the
                present to illuminate the path forward. The team Indira@40, now
                renamed as IU@40, envisions the cultivation of future leaders
                who will not only carry forward the rich legacy of Indira
                University but also collaborate with the next generation of
                leadership—Mr. Shaan Tarita Shankar Aditya Mehendale and Mr.
                Sahil Tarita Shankar Aditya Mehendale—and a core team of
                esteemed experts who have been integral to Indira Universitys
                success for decades. This vision of sustained growth, fueled by
                excellence, empathy, and dynamic engagement, is the driving
                force behind this exceptional team.
              </p>
              <Button className={`${styles.KnowMoreBtn}  `}>Know More</Button>
              </Grid>
            

            {/* Right Side */}
            <Grid item xs={12} md={6}>
              {/* <div className="mt-6"> */}
                <img
                  src={Indira40}
                  alt="Indira@40"
               
                  className="IndiraBrandSlamImg"
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "left",
                    mt: {
                      xs: 1, // Small screens
                      sm: 5, // Small to medium screens
                      md: 5, // Medium screens
                      lg: 7, // Large screens
                      xl: 7, // Extra-large screens
                    },
                    ml: {
                      xs: 22, // Small screens
                      sm: 20, // Small to medium screens
                      md: 10, // Medium screens
                      lg: 20, // Large screens
                      xl: 60, // Extra-large screens
                    },
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{ color: "#FFF9E0", borderColor: "#FFF9E0", mx: 1 }}
                    aria-label="Previous"
                  >
                    <KeyboardArrowLeftIcon sx={{ fontSize: "25px" }} />
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ color: "#FFF9E0", borderColor: "#FFF9E0", mx: 1 }}
                    aria-label="Next"
                  >
                    <ChevronRightIcon sx={{ fontSize: "25px" }} />
                  </Button>
                </Box>
              {/* </div> */}
            
            </Grid>
            </Grid>
          </div>
        </div>
     
   
  );
};

export default IndiraFourty;
