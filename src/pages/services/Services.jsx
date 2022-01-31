import React from 'react';
import styles from "./styles.module.scss"

const Services = () => {
  return(
  <div className={styles.wrapper}>
      <div className={styles.firstLayer}>
        <div className={styles.secondLayer}>
            <div className={styles.thirdLayer}>
              <p className={styles.subtitle}>Услуги нашей компании</p>
              <h1 className={styles.title}>Какие <span style={{color:"#79B15E"}}>услуги</span> мы можем вам предложить?</h1>
            </div>
        </div>
      </div>
  </div>
  );
};

export default Services;
