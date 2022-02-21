import React from 'react'
import styles from "./styles.module.scss"

const ServicesSlider = ({services,mainText}) => {
  return (
    <div style={{ display: "flex", marginLeft: "-6%" }}>
    <div className={styles.firstLayer}>
      <div className={styles.secondLayer}>
        <div className={styles.thirdLayer}>
          <div className={styles.lastlayer}>
            <h1 className={styles.title}>
              Какие <span style={{ color: "#79B15E" }}>услуги</span> <br />{" "}
              мы можем вам <br /> предложить?
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.navbar}>
      <nav>
        <ul className={styles.navList}>
          {services.map((item) => {
            return <div className={styles.listItem}>{item}</div>;
          })}
        </ul>
      </nav>
    </div>
  </div>  )
}

export default ServicesSlider