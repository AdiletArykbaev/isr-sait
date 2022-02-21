import React from 'react'
import Case from '../../components/Case/Case'
import caseImg from "../../images/case-1-img.png"
import DordoiLogo from "../../images/dordoi-logo.svg"
import styles from "./Cases.module.scss"

const Cases = () => {
 console.log(caseImg,DordoiLogo)
 const cases1 = [ {caseImg:caseImg,companyName:"Alaiku Organics",serviceName:"Консалтинг",logo:DordoiLogo},{caseImg:caseImg,companyName:"SHORO",serviceName:"Исследования",logo:DordoiLogo}] 
 const cases2 = [ {caseImg:caseImg,companyName:"Dordoi Balykchi",serviceName:"Дизайн и продвижение",logo:DordoiLogo},{caseImg:caseImg,companyName:"SHORO",serviceName:"Исследования",logo:DordoiLogo}] 
 return (
    <div className={styles.wrapper}>
            <div className={styles.infoBlock}>
                    <div className={styles.textContent}>
                    <h3 className={styles.title}>КЕЙСЫ</h3>
                    <h6 className={styles.subtitle}>Что мы сделали?</h6>
                    </div>
                       
            </div>
              <div style={{display:"flex",padding:"0",margin:"0"}}>
          {
       cases1.map((item)=>{
                
                return <Case borderPos={"borderTop"} logo={item.logo}text={item.text} backGroundImg={item.caseImg} companyName={item.companyName} caseName={item.serviceName}/>
        })
        }
          </div>
          <div style={{display:"flex",padding:"0",margin:"0"}}>
          {
       cases2.map((item)=>{
                
        return <Case borderPos={"borderTop"} logo={item.logo}text={item.text} backGroundImg={item.caseImg} companyName={item.companyName} caseName={item.serviceName}/>
})
        }
          </div>
   </div>
  )
}

export default Cases