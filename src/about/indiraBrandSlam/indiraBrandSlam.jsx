// components/IndiraAt40.tsx

import React from "react";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import styles from "../style.module.css";
import { Box ,Grid} from "@mui/material";
import { IndiraBrandSlamImg } from "../../assets";

const IndiraBrandSlam = () => {
  
  return (
    <div className= {`${styles.BrandSlamParaSection}`}>
      <div className=" containerLeftRight paddingTopBottom">
        
            <Grid container spacing={0}>
                        <Grid item xs={12} md={6}>
              <h1 className={`${styles.BrandSlamHeading}`}>INDIRA BRAND SLAM</h1>
              <p
                className={`${styles.BrandSlamPara}`}
              >
                Indira Brand Slam-Summit & Awards is an annual flagship event
                hosted by the prestigious Indira Group of Institutes, Pune to
                recognize the efforts of market leaders. It serves as a forum
                for exploring the evolving landscape of Marketing and Branding
                practices in the contemporary era. The objective of Indira Brand
                Slam is to discuss Innovations in Branding and Marketing that
                have led to greater market penetration and reach among
                consumers, recognize brands that have, by sheer power of
                innovation, reinvented themselves, and iconize brand leadership
                in multiple sectors. IBS aims to attract Indias best corporate
                and business minds to campus and give our students practical and
                tactical insights into the corporate world. The speakers and
                awardees are the role models for the next generation and the
                learning is priceless. In the year 2024, the Indira Brand Slam
                was re-introduced with a new identity as Indira Brand Sutra.
              </p>
              <Button
                variant="contained"
                className="font-bold"
                style={{
                  fontFamily: "Inter",
                  textTransform: "none",
                  backgroundColor: "#FCCC00",
                  color: "#1B1B1B",
                  marginTop: "50px",
                  fontSize: "16px",
                }}
              >
                Know More
              </Button>
              </Grid>

            {/* Right Side */}
                <Grid item xs={12} md={6}>
                {/* <div className="mt-6 "> */}
                <img
                  src={IndiraBrandSlamImg}
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
        // </div>
    
  );
};

export default IndiraBrandSlam;
