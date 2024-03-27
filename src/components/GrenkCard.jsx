import React from 'react'
import styles from './Card.module.css'

const GrenkCard = () => {
  return (
    <div className={styles.card}>
        <img className={styles.cardImage} src="https://i.imgur.com/YwEyatc.png" alt="grenkphoto"/>
        <h2 className={styles.cardTitle}>Grenk</h2>
        <p className={styles.cardText}>Dj oriundo de Venezuela con base en Valparaíso chile, amor por el drum and bass desde sus inicios. Ha ido experimentando nuevos sonidos como el Techno Raw, Hipnotic</p>
        <a href="https://www.instagram.com/grenk__/" target="_blank" rel="noopener noreferrer" className={styles.instagramButton}>Instagram</a>
    </div>
  )
}

export default GrenkCard