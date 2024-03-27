import React from 'react'
import styles from './Card.module.css'

const CinderCard = () => {
  return (
    <div className={styles.card}>
        <img  className={styles.cardImage} src="https://i.imgur.com/4rTYRgY.png" alt="cinderphoto"/>
        <h2 className={styles.cardTitle}>Cinder</h2>
        <p className={styles.cardText}>Cinder es un dj de la V región caracterizan sus sonidos hipnóticos y envolventes con una sensación de groove y bounce,pinchando en lugares desidentes de valparaiso,viña del mal,santiago y la serena</p>
        <a href="https://www.instagram.com/cinderdj__/" target="_blank" rel="noopener noreferrer" className={styles.instagramButton}>Instagram</a>
    </div>
  )
}

export default CinderCard