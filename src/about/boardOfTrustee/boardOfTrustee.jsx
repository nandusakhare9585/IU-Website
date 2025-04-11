// components/BoardOfTrustees.tsx

import React from "react";
import { Grid } from "@mui/material";
import styles from "../style.module.css";
import img1 from "../../assets/HomePage/Board_Of_Trustee/Sarita_image.png";
import img2 from "../../assets/HomePage/Board_Of_Trustee/Sadeep_image.png";
import img3 from "../../assets/HomePage/Board_Of_Trustee/TaritaShankar.png";
import img4 from "../../assets/HomePage/Board_Of_Trustee/Shaan_Image.png";
import img5 from "../../assets/HomePage/Board_Of_Trustee/Pilaji_Jadhav.png";
import img6 from "../../assets/HomePage/Board_Of_Trustee/Vasant_Mhaske.png";
import img7 from "../../assets/HomePage/Board_Of_Trustee/Sahil_Image.png";

const BoardOfTrustees = () => {

  const members = [
    { src: img1, name: "Smt. Sarita Shankar Walkalkar", position: "President" },
    {
      src: img2,
      name: "Mr. Sandeep Prabhakar Gaekwad",
      position: "Vice-President",
    },
    {
      src: img3,
      name: "Dr. Tarita Shankar",
      position: "Chairperson & Chief Mentor",
    },
    {
      src: img4,
      name: "Mr. Shaan Tarita Shankar Aditya Mehendale",
      position: "Trustee Member",
    },
    { src: img5, name: "Mr. Pilaji Sursingh Jadhavrao", position: "Treasurer" },
    { src: img6, name: "Mr. Vasant Maruti Maske", position: "Trustee Member" },
    {
      src: img7,
      name: "Mr. Sahil Tarita Shankar Aditya Mehendale",
      position: "Joint Secretary",
    },
  ];

  return (
    <div className=" containerLeftRight paddingTopBottom">
      <div className="container mx-auto my-4">
        <h1 className={`${styles.VisionMissionHeading} !text-[#145684] uppercase my-6`}  >
          Board of Trustees & Managing Committee
        </h1>
        <Grid container spacing={2}>
          {/* First Row: 4 images */}
          {members.slice(0, 4).map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <div className="text-center ">
                <img
                  src={member.src}
                  alt={`Image of ${member.name}`}
                  width={500}
                  height={500}
                  className="rounded-lg "
                />
                <p className={`${styles.MemberName} uppercase`} >{member.name}</p>
                <p className={`${styles.Memberpostion} uppercase`}>{member.position}</p>
              </div>
            </Grid>
          ))}

          {/* Second Row: 3 images */}
          {members.slice(4, 7).map((member, index) => (
            <Grid item xs={12} sm={4} md={3} key={index + 4} >
              <div className="text-center ">
                <img
                  src={member.src}
                  alt={`Image of ${member.name}`}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
                <p className={`${styles.MemberName} uppercase`}>{member.name}</p>
                <p className={`${styles.Memberpostion} uppercase`}>{member.position}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default BoardOfTrustees;
