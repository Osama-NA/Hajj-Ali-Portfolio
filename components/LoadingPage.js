import React from 'react'
import styles from '../styles/LoadingPage.module.scss'

const LoadingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>Loading Portfolio</h3>

        <div className={styles.loading_squares}>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage