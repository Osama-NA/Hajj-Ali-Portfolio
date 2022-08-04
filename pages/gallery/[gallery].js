import React, { useEffect, useCallback, useState } from 'react'
import { useRouter } from "next/router";
import styles from '../../styles/Gallery.module.scss'
import Meta from '../../components/Meta'
import ViewImage from '../../components/ViewImage'
import galleries from '../../utils/data'
import MainFooter from '../../components/MainFooter'
import LoadingPage from '../../components/LoadingPage'
import ScrollArrow from '../../components/Gallery/ScrollArrow'
import Images from '../../components/Gallery/Images'
import Header from '../../components/Gallery/Header'

const Gallery = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(true)
    const [viewImage, setViewImage] = useState(false)
    const [image, setImage] = useState()
    const [gallery, setGallery] = useState({
        name: '',
        images: []
    })

    const handleTargetGallery = useCallback((galleryName) => {
        let thisGallery = galleries.filter(gallery => {
            return gallery.name === galleryName
        })[0]

        setGallery({
            name: thisGallery.name.toUpperCase(),
            images: thisGallery.images
        })
    }, [])

    useEffect(() => {
        let galleryName = router.query.gallery
        if (galleryName === undefined) return

        handleTargetGallery(galleryName)
    }, [handleTargetGallery, router.query.gallery]);

    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <>
            <div className={styles.container} >
                <Meta
                    title={
                        `${gallery.name === '' ? '' : gallery.name + ' - '}MOHAMMAD HAJ-ALI`
                    }
                />

                <Header gallery={gallery} />

                <Images
                    setImage={setImage}
                    setViewImage={setViewImage}
                    gallery={gallery}
                />

                <ScrollArrow  />

                <MainFooter maxWidth='100vw' />

                {
                    loading &&
                    <LoadingPage />
                }
            </div>

            {
                viewImage &&
                <ViewImage
                    setViewImage={setViewImage}
                    image={image}
                />
            }
        </>
    )
}

export default Gallery