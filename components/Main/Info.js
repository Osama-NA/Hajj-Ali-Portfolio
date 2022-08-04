import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/Main.module.scss'

const Info = ({arrowRef, goToGalleries, goToContacts, headerRef, textRef, titleRef, button1Ref, button2Ref}) => {
  return (
    <main className={styles.info} >
      <header className={styles.header} ref={headerRef}>
        <h2>Portfolio</h2>
      </header>

      <main className={styles.main}>
        <h1 ref={titleRef}>Mohammad Haj-Ali<span>.</span></h1>

        <h3 ref={textRef}>PHOTOGRAPHER <span>/</span> EDITOR WITH OVER 6 YEARS OF EXPERIENCE</h3>

        <div className={styles.buttons}>
          <button
           className={styles.galleries_btn}
           onClick={goToGalleries}
           ref={button1Ref}
          >
            Explore Galleries
          </button>
          <button
           className={styles.contacts_btn}
           onClick={goToContacts}
           ref={button2Ref}
          >
            Get In Touch
          </button>
        </div>
      </main>

      <footer
       className={styles.footer}
       onClick={goToGalleries}
       ref={arrowRef}
      >
        <span className={styles.arrow}>
          <FontAwesomeIcon icon={faBackward} color='#292929' />
        </span>
      </footer>
    </main>
  )
}

export default Info