import React from 'react';
import styles from "./styles.module.scss"
import mainImg from "../../images/main-page.png"
import arrow1 from "../../images/arrow-2.svg"
import arrow2 from "../../images/arrow-1.svg"
import arrow3 from "../../images/arrow-3.svg"

const MainPage = () => {
  return (
  <div className={styles.wrapper}>
      <div className={styles.main_block}>
        <div className={styles.content_block}>
        <div className={styles.text_block}>
              <h1 className={styles.title}>
              It Takes Great  <br /> People To Do <br/>Great Results.
              </h1>
            <p className={styles.subtext}>
            Мы в ISRC повышаем эффективность организаций , внедряя инновационные инструменты управления. 
            </p>
            <div className={styles.layer_1}>
        <div className={styles.layer_2}>
          <div className={styles.animation_block}>
            <h4 className={styles.animation_title}>Бесплатная консультация</h4>
           </div>
        </div>
       
      </div>
          </div>
          <div className={styles.image_block}>
           
                <div className={styles.image_block2}>
                      <div className={styles.scene1}>
                        <img src={arrow3} alt="arrow1" />
                      </div>
                      <div className={styles.scene2}>
                        <img src={arrow2} alt="arrow2" />
                      </div>
                      <div className={styles.scene3}>
                        <img src={arrow1} alt="arrow3" />
                      </div>
                </div>
                <div className={styles.image_block1}>
                  <img src={mainImg} alt="mainIMg" />
               </div>
               
          </div>
        </div>
      
   
         
      </div>
       
  </div>
  );
};

export default MainPage;
