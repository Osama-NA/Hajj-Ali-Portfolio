import React from 'react'
import { useRouter } from "next/router";
import styles from '../../styles/Gallery.module.scss'

const Header = ({gallery}) => {
    const router = useRouter();
    
  return (
    <header className={styles.gallery_header}>
        <h1>{gallery.name}</h1>
        <button
            onClick={() => router.push('/?to=galleries')}
        >
            Back to Galleries
        </button>
    </header>
  )
}

export default Header