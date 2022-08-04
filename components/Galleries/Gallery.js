import React, { useEffect, useState, useRef } from 'react'
import styles from '../../styles/Galleries.module.scss'
import ViewImage from '../ViewImage'
import Corners from './Corners'
import Images from './Images'
import Header from './GalleryHeader'
import Footer from './GalleryFooter'
import useMediaQuery from "../../utils/useMediaQuery"

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
}

const galleryAnimation = 'scale .55s ease-out forwards'

const Gallery = ({ name, images }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [viewImage, setViewImage] = useState(false)
  const [image, setImage] = useState()
  const [handledImages, setHandledImages] = useState(<></>)
  
  const containerRef = useRef()

  const isMobileScreen = useMediaQuery("(max-width: 600px)")
  
  // INTERSECTION OBSERVER
  const observerCallback = entries => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions)
    if (containerRef.current) observer.observe(containerRef.current)

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef])

  useEffect(() => {
    if (isVisible) {
      containerRef.current.style.animation = galleryAnimation
    } else {
      containerRef.current.style.animation = 'none'
    }
  }, [isVisible])

  useEffect(() => {
    if (isMobileScreen) {
      setHandledImages(<Images
        images={images}
        setImage={setImage}
        setViewImage={setViewImage}
      />)
      return
    }

    if (images.length === 5) {
      let desktopImages = images.filter((img, i) => i < 4 && img)

      setHandledImages(<Images
        images={desktopImages}
        setImage={setImage}
        setViewImage={setViewImage}
      />)
    }
  }, [image, images, isMobileScreen])

  return (
    <>
      <section className={styles.gallery} ref={containerRef}>
        <Header galleryName={name} />

        <main className={styles.images_container}>
          <Corners />

          {handledImages}
        </main>

        <Footer galleryName={name} />
      </section>

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