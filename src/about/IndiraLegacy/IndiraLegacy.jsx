import React from "react";
import styles from "../style.module.css";
import { Box, Grid } from "@mui/material";

import { IndiraLegacyImg1, IndiraLegacyImg2, IndiraLegacyImg3 } from "../../assets";

const IndiraLegacy = () => {
  return (
    <div className={styles.visionSection}>
      <div className=" containerLeftRight paddingTopBottom ">
        <h2 className={`${styles.IndiraLegacyHeading} uppercase `}>
          {" "}
          INDIRA LEGACY
        </h2>
        <h3 className={`${styles.HistoryHeading} uppercase `}>
          {" "}
          History: A Legacy of Empowering Futures
        </h3>
        <p className={`${styles.historypara}  `}>
          Since its inception in 1994, Indira University former known as Indira
          Group of Institutes has been driven by a singular vision: to ignite
          the corporate and entrepreneurial spirit within India&apos;s youth.
          Founded by the visionary Dr. Tarita Shankar, Indira University was
          born from the conviction that a robust educational framework is
          essential for nurturing global leaders. Dr. Shankar&apos;s unwavering
          pursuit of excellence led to the creation of institutions that embody
          human values and demonstrate a profound commitment to developing
          future business leaders.
        </p>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <h4 className={`${styles.HeadingLefth4} uppercase `}>
              A Journey of Expansion and Innovation
            </h4>
            <p className={`${styles.LegacyparaLeft}  `}>
              {" "}
              Driven by relentless dedication, Indira University has expanded
              its academic horizons to encompass a diverse range of disciplines,
              including Management, Information Technology, Pharmacy, Commerce,
              Science, Engineering, Aviation, and Mass Communication. This
              expansive growth has resulted in 14 institutions offering
              education from Kindergarten to Doctorate levels.
            </p>
            <Box>
              <img
                src={IndiraLegacyImg2}
                className={`${styles.IndiraLegacyImg}  `}
                alt="Indira Legacy Img 2"
              />
            </Box>
            <h4 className={`${styles.HeadingLefth4} uppercase `}>
              A Future Forged in Excellence
            </h4>
            <p className={`${styles.LegacyparaLeft}  `}>
              Indira University&apos;s journey is a testament to its vision,
              dedication, and commitment to empowering future generations. We
              continue to strive for excellence, fostering a vibrant community
              of learners and leaders who will shape tomorrow’s world.
            </p>

            <Box>
              <img
                src={IndiraLegacyImg3}
                className={`${styles.IndiraLegacyImg}  `}
                alt="Indira Legacy Img 3"
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6} >
            <Box>
              <img
                src={IndiraLegacyImg1}
                className={`${styles.IndiraLegacyImg}  `}
                alt="Indira Legacy Img 1"
              />
            </Box>
            <h4 className={`${styles.HeadingRighth4} uppercase `}>
              {" "}
              A Legacy of Achievement and Recognition
            </h4>
            <p className={`${styles.LegacyparaRight} `}>
              Over the past three decades, Indira University has achieved
              significant milestones, each serving as a foundation for even
              greater heights. With over 150+ awards won in these three decades,
              IGI stands recognized across National and Global platforms for:
            </p>

            {/* <List style={{color:'#ffffff'}}>
              <ListItem><ListItemText >Educational Excellence: Indira University is consistently ranked among the top B-schools in Pune by prestigious organizations such as AIMA – IMJ, which has also recognized us nationally for our strong industry interface.</ListItemText></ListItem>
              <ListItem><ListItemText >Academic Prowess: Our students consistently achieve outstanding academic results, reaching university-level rankings. Their achievements attract top corporate recruiters, solidifying their path to impactful careers.</ListItemText></ListItem>
              <ListItem><ListItemText >Strategic Partnerships: Indira University&apos;s strong reputation has enabled key partnerships, including a campus agreement with Microsoft for software utilization and &quot;train the trainer&quot; workshops.</ListItemText></ListItem>
              <ListItem><ListItemText >Industry Accolades: Business India has consistently ranked us among the top educational institutes in Pune for two consecutive years.</ListItemText></ListItem>
              <ListItem><ListItemText >Accreditation and Validation: Our institutions hold accreditations from various certifying bodies, with Indira Institute of Management being the first management institute in Maharashtra to receive accreditation from the NBA, New Delhi.</ListItemText></ListItem>
              <ListItem><ListItemText >World-Class Resources: Our audio-visual centers, supported by collaborations with Harvard Business School, Stanford, Pyramid Media, and the Tom Peters Company, provide access to a vast collection of resources. Indira College of Pharmacy is accredited with Grade B++ by NAAC (National Assessment and Accreditation Council).</ListItemText></ListItem>
            </List> */}

            <ul className={`${styles.ullist}  `}>
              <li>
                Educational Excellence: Indira University is consistently ranked
                among the top B-schools in Pune by prestigious organizations
                such as AIMA – IMJ, which has also recognized us nationally for
                our strong industry interface.
              </li>
              <li>
                Academic Prowess: Our students consistently achieve outstanding
                academic results, reaching university-level rankings. Their
                achievements attract top corporate recruiters, solidifying their
                path to impactful careers.
              </li>
              <li>
                Strategic Partnerships: Indira University&apos;s strong
                reputation has enabled key partnerships, including a campus
                agreement with Microsoft for software utilization and
                &quot;train the trainer&quot; workshops.
              </li>
              <li>
                Industry Accolades: Business India has consistently ranked us
                among the top educational institutes in Pune for two consecutive
                years.
              </li>
              <li>
                Accreditation and Validation: Our institutions hold
                accreditations from various certifying bodies, with Indira
                Institute of Management being the first management institute in
                Maharashtra to receive accreditation from the NBA, New Delhi.
              </li>
              <li>
                World-Class Resources: Our audio-visual centers, supported by
                collaborations with Harvard Business School, Stanford, Pyramid
                Media, and the Tom Peters Company, provide access to a vast
                collection of resources. Indira College of Pharmacy is
                accredited with Grade B++ by NAAC (National Assessment and
                Accreditation Council).
              </li>
            </ul>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default IndiraLegacy;
