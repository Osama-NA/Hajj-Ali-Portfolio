import React from 'react'
import styles from '../../styles/Galleries.module.scss'
import { useRouter } from "next/router";

const Footer = ({ galleryName }) => {
    const router = useRouter()
  
    return (
      <footer className={styles.mobile_button}>
        <button
          onClick={() => router.push(`/gallery/${galleryName}`)}
        >
          View Gallery
        </button>
      </footer>
    )
  }

export default Footer