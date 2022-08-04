import React from 'react'
import styles from '../styles/MainFooter.module.scss'
import { useRouter } from "next/router";

const MainFooter = ({maxWidth}) => {
  const router = useRouter()

  return (
    <footer className={styles.main_footer}
      style={{maxWidth: maxWidth}}
    >
      <h1 onClick={() => router.push('/')}>
        Mohammad Haj-Ali
      </h1>

      <p
      >
        Made By
        <a
          href='https://www.linkedin.com/in/osama-hajj-ali/'
          target='_blank' rel="noreferrer"
        >
          @Osama Haj-Ali
        </a>
      </p>
    </footer>
  )
}


export default MainFooter