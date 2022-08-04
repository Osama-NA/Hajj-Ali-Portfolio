import React from 'react'
import styles from '../../styles/Galleries.module.scss'
import { useRouter } from "next/router";

const Header = ({ galleryName }) => {
    const router = useRouter()

    return (
        <header className={styles.gallery_header}>
            <h2>
                <span>{'>> '}</span>
                {galleryName}
                <span className={styles.mobile_span}>{' <<'}</span>
            </h2>
            <button
                onClick={() => router.push(`/gallery/${galleryName}`)}
            >
                View Gallery
            </button>
        </header>
    )
}

export default Header