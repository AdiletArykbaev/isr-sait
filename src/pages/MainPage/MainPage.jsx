import React from 'react';
import styles from "./styles.module.scss"
import mainImg from "../../images/main-page.png"

const MainPage = () => {
  return (
  <div className={styles.wrapper}>
      <div className={styles.main_block}>
        <div className={styles.content_block}>
        <div className={styles.text_block}>
              <h1 className={styles.title}>
              It Takes Great People To Do <br/>Great Results.
              </h1>
            <p className={styles.subtext}>
            Мы в ISRC повышаем эффективность организаций, внедряя инновационные инструменты управления. 
            </p>
          </div>
          <div className={styles.image_block}>
                <img src={mainImg} alt="mainIMg" />
          </div>
        </div>
      <div className={styles.layer_1}>
        <div className={styles.layer_2}>
          <div className={styles.animation_block}>
            <h4 className={styles.animation_title}>Наше портфолио</h4>
           </div>
        </div>
       
      </div>
   
         
      </div>
       
  </div>
  );
};

export default MainPage;
