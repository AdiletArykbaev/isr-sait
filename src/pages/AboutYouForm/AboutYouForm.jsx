import React from 'react'
import styles from "./styles.module.scss"

const AboutYouForm = () => {
  return (
    <div className={styles.wrapper}>
                <h1 className={styles.title}>РАССКАЖИТЕ  <br />
    О ВАШЕМ ПРОЕКТЕ</h1>
        <div className={styles.forms}>
            <div className={styles.firstLayer}>
                    <input className={styles.nameInput} type="text" placeholder='Ваше имя' />

                    <input  className={styles.nameInput} type="text" placeholder='Номер телефона' />
                    <input  className={styles.nameInput} type="text" placeholder='E-mail' />

            </div>
            <div className={styles.secondLayer}>
                    <input type="text"  placeholder="Расскажите о своем проекте или бизнесеt"/>
            </div>
        </div>
        <div className={styles.checkedData}>
        <input type="checkbox"  />
          <p className={styles.personalData}>Согласен на <a className={styles.personalDataLink} href="#"> обработку персональных данных</a></p>
        </div>
    </div>
  )
}

export default AboutYouForm