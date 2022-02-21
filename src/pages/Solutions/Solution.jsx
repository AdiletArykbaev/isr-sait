import React from 'react'
import Card from '../../components/CardComponent/Card';
import styles from "./Solution.module.css"

const Solution = ({images}) => {
  return (
    <div className={styles.wrapper}>
        <h1 className={styles.title}>
         <span style={{color:"#79B15E"}}>ИДЕИ</span> , РЕШАЮЩИЕ <br />
            <span style={{marginLeft:"60px"}}> ЗАДАЧИ БИЗНЕСА</span>
        </h1>
        <div className={styles.imageBLock}>
            {images.map((item)=>{
                return <Card image={item}/>
            })}
        </div>
          
    </div>
  )
}

export default Solution