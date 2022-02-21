import React from 'react'
import styles from "./Card.module.scss"

const Card = ({image}) => {
  return (
    <div className={styles.wrapper}>
        <img src={image} alt="cardImg" />
    </div>
  )
}

export default Card