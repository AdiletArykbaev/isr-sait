import React from 'react';
import styles from "./styles.module.css"
import logo from "../../images/isr-logo.svg"
import BurgerMenu from '../burgerMenu/BurgerMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
   <div className={styles.wrapper}>
       <div className={styles.logo}>
            <img src={logo} alt="logo" />
       </div>
       <div className={styles.line}>

       </div>
       <div className={styles.linkWrapper}>
       <a className={styles.numberLink} href="tel:+996 550 034 788">
       +996 550 034 788
       </a>
       </div>
    
        <div className={styles.line2}>

        </div>
       <div className={styles.burgerMenu}>
             <h1 className={styles.title}>Меню</h1>
            <BurgerMenu/>
       </div>
     
   </div>
  );
};

export default Header;
