import React from "react";
import styles from "./styles.module.scss";
import ServicesSlider from "../../components/ServicesSlider/ServicesSlider";

const Services = ({title,subtitle,services,textBtn}) => {
  
  return (
    <div className={styles.wrapper}>
            <div className={styles.mainText}>
            <h4 className={styles.subtitle}>{subtitle}</h4>
            <h1 className={styles.title}>
              {" "}
              <span style={{ color: "#79B15E" }}>РЕШЕНИЯ, </span> ПРЕОБРАЗУЮЩИЕ
              <br /> ВАШ БИЗНЕС
            </h1>
            </div>
   
     <ServicesSlider services={services}/>
     
    
    </div>
  );
};

export default Services;
