import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/Gallery.module.scss'

const ScrollArrow = () => {
    return(
        <div className={styles.scroll_arrow} onClick={() => window.scrollTo(0, 0)}>
            <span className={styles.arrow}>
                <FontAwesomeIcon icon={faBackward} color='#292929' />
            </span>
        </div>
    )
}

export default ScrollArrow