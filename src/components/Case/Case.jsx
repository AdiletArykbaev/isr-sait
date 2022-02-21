import  React from 'react'
import styles from "./Case.module.scss"
import arrow from "../../images/arrow.svg"
const Case = ({backGroundImg,logo,companyName,caseName}) => {
 
  return (
    <div  className={styles.caseWrapper} >
       <div id="logoBlock" className={styles.logoBlock}>
       </div>

        <div className={styles.textContent}>
            <h5 className={styles.subtitle}>{caseName}</h5>
              <h1 className={styles.title}>{companyName}</h1>
        </div>
    </div>
  )
}

export default Case