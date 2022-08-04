import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/SuccessTab.module.scss'

const SuccessTab = ({ message, setViewSuccessMessage }) => {
    return (
        <div className={styles.container} onClick={() => setViewSuccessMessage(false)}>
            <div className={styles.message_container}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faCheck} />
                </div>

                <p>{message}</p>
            </div>
        </div>
    )
}

export default SuccessTab