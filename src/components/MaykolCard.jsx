import React from 'react'
import styles from './Card.module.css'

const MaykolCard = () => {
  return (
    <div className={styles.card}>
        <img  className={styles.cardImage} src="https://i.imgur.com/sZd3Zmj.jpeg" alt="maykolphoto"/>
        <h2 className={styles.cardTitle}>999maykol</h2>
        <p className={styles.cardText}>Desde Limache en la Quinta Región, 999maykol ha estado explorando el mundo de la música electrónica durante algunos años con una profunda pasión por la música y un deseo constante de mejorar. Su género principal es el Hipnotic, variando en sonidos desde los 136 hasta los 147 BPM.</p>
        <a href="https://www.instagram.com/999.maykol/" target="_blank" rel="noopener noreferrer" className={styles.instagramButton}>Instagram</a>
    </div>
  )
}

export default MaykolCard