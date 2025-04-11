
import styles from './style.module.css';

import { Logo } from "../assets";
import { useEffect, useState } from "react";

const Footer = () => {
  // const [isVisible, setIsVisible] = useState(false);
        
        
  //         useEffect(() => {
  //           const observer = new IntersectionObserver(
  //             (entries) => {
  //               entries.forEach((entry) => {
  //                 if (entry.isIntersecting) {
  //                   setIsVisible(true); // Trigger animation when the section is in view
  //                 } else {
  //                   setIsVisible(false); // Reset the animation when section leaves the view
  //                 }
  //               });
  //             },
  //             { threshold: 0.5 } // Trigger when 50% of the section is visible
  //           );
        
  //           const target = document.querySelector(`#FooterAni`);
  //           if (target) {
  //             observer.observe(target);
  //           }
        
  //           return () => {
  //             if (target) {
  //               observer.unobserve(target);
  //             }
  //           };
  //         }, []);
  return (

    <div 
    className={` ${styles.FooterSection} `} >
        <div className=" containerLeftRight paddingTopBottom ">
      
        <div  className={`${styles.marginTopfooter} grid grid-cols-1 sm:grid-cols-3 gap-4 `}>
          <div><img src={Logo} alt="icon" className={`${styles.LogoSize}  ` }/></div>
            <div>
              <h2 className={`${styles.HeadingName} uppercase `}> Get in Touch</h2>
              <p className={`${styles.footersmallFont} uppercase `}> Indira Group of Institutes,
            <br/>
            Tapasya 85/5-A, New Pune-Mumbai Highway,
            <br/>
            Tathwade, Pune - 411033, India.</p>
            <p className={`${styles.footersmallFont} uppercase `}>020 6616826</p>
            <p className={`${styles.footersmallFont} uppercase `}> info@indiraedu.com</p>
            </div>

            <div className="border-l-2 pl-8">
            <h2 className={`${styles.footersmallFont} uppercase `}>   Quick Links</h2>
         
          <ul className={`${styles.footersmallFont} space-y-2 `} >
            <li>
                     Home
            </li>
            <li>
              {/* <Link href="/about" className="hover:underline"> */}
                About Us
              {/* </Link> */}
            </li>
            <li>
                Institutes
            </li>
            <li>
                Admissions
            </li>
            <li>
                Contact Us
            </li>
            <li>
                Accreditations and Recognition
            </li>
            <li>
                Privacy Policy
            </li>
          </ul>
        </div>
          </div>

    </div></div>
  );
};

export default Footer;
