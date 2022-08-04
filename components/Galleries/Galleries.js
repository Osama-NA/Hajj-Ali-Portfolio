import React from 'react'
import styles from '../../styles/Galleries.module.scss'
import Gallery from './Gallery'
import galleries from '../../utils/data'

const Galleries = ({galleriesRef}) => {
  return (
    <div className={styles.container} ref={galleriesRef}>
      <header className={styles.galleries_header}>
        <h2>Galleries</h2>
      </header>

      <main className={styles.galleries}>
        {
          galleries.map((gallery, id) => {
            return <Gallery
              key={id}
              name={gallery.name}
              images={gallery.images}
            />
          })
        }
      </main>
    </div>
  )
}

export default Galleries