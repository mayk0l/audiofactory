import React from 'react'
import styles from './Card.module.css'

const BakuraCard = () => {
  return (
    <div className={styles.card}>
        <img  className={styles.cardImage} src="https://i.imgur.com/kEcGm1T.png" alt="grenkphoto"/>
        <h2 className={styles.cardTitle}>Bakura</h2>
        <p className={styles.cardText}>Bakura se desarrolla como un proyecto sensorial basado totalmente en el goce de la pista. Integrando sonidos crudos y secos con mucho enfasis en el ritmo latino, con un especial gusto por la atmosfera y el cadereo. sus sets van desde los 140 a 160 bpm haciendo un repaso completo al cuerpo desde el ritmo al trance.</p>
        <a href="https://www.instagram.com/bakuraaaaaaaaa/" target="_blank" rel="noopener noreferrer" className={styles.instagramButton}>Instagram</a>
    </div>
  )
}

export default BakuraCard