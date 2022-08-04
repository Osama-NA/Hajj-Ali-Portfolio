import React from 'react'
import styles from '../styles/ViewImage.module.scss'

const ViewImage = ({ image, setViewImage }) => {
    return (
        <div className={styles.container}>
            <div className={styles.button} onClick={() => setViewImage(false)}>
                <button
                    className={styles.close}
                >
                    Close
                </button>
            </div>

            <picture className={styles.image}>
                <source srcSet={image} />
                <img src={image} alt="Mohammad Haj-Ali's Portfolio" />
            </picture>
        </div>
    )
}

export default ViewImage