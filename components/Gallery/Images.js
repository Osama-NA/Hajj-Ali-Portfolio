import React from 'react'
import ImageElement from './ImageElement'
import styles from '../../styles/Gallery.module.scss'

const Images = ({gallery, setViewImage, setImage}) => {
    return (
        <main className={styles.images}>
            {
                gallery.images.map((img, id) => {
                    return <ImageElement
                        key={id}
                        name={id % 2 !== 0 ? styles.tall : styles.wide}
                        setViewImage={setViewImage}
                        setImage={setImage}
                        img={img.image}
                    />
                })
            }
        </main>
    )
}

export default Images