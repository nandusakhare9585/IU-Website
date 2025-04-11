"use client"
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widgets.in5.nopaperforms.com/emwgts.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div className={styles.hamburgerContainer}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div
        className={`${styles.sideMenu} ${isMenuOpen ? styles.menuOpen : ""}`}
      >
        <button className={styles.closeButton} onClick={toggleMenu}>
          <CloseIcon />
        </button>
        <ul className={styles.menuList}>
          <li  >
            <NavLink to="/home" onClick={closeMenu} className={styles.menuListAtag}>
            <HomeIcon className={styles.iconMenu}/>
              Home
            </NavLink>
          </li>
          <br/>
          <li>
            <NavLink to="/about" onClick={closeMenu} className={styles.menuListAtag}>
            <InfoIcon className={styles.iconMenu}/>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
