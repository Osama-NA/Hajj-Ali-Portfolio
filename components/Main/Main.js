import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Main.module.scss'
import Info from './Info'
import SideImage from './SideImage'

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
}

const imageAnimation = 'fadeIn .4s  ease-out .15s forwards'
const titleAnimation = 'slideRight .4s ease-out .7s forwards'
const textAnimation = 'slideRight .4s ease-out 1s forwards'
const button1Animation = 'slideRight .4s ease-out 1.25s forwards'
const button2Animation = 'slideRight .4s ease-out 1.5s forwards'
const arrowAnimation = 'fadeIn 1s linear 1.75s forwards'
const headerAnimation = 'slideDown .5s ease-out .35s forwards'

const Main = ({ goToGalleries, goToContacts }) => {
  const [isVisible, setIsVisible] = useState(false);

  const containerRef = useRef()
  const imageRef = useRef()
  const headerRef = useRef()
  const textRef = useRef()
  const titleRef = useRef()
  const button1Ref = useRef()
  const button2Ref = useRef()
  const arrowRef= useRef()

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
      imageRef.current.style.animation = imageAnimation
      headerRef.current.style.animation = headerAnimation
      textRef.current.style.animation = textAnimation
      titleRef.current.style.animation = titleAnimation
      button1Ref.current.style.animation = button1Animation
      button2Ref.current.style.animation = button2Animation
      arrowRef.current.style.animation = arrowAnimation
    } else {
      imageRef.current.style.animation = 'none'
      headerRef.current.style.animation = 'none'
      textRef.current.style.animation = 'none'
      titleRef.current.style.animation = 'none'
      button1Ref.current.style.animation = 'none'
      button2Ref.current.style.animation = 'none'
      arrowRef.current.style.animation = 'none'
    }
  }, [isVisible])

  return (
    <div className={styles.container} ref={containerRef}>
      <Info
        goToGalleries={goToGalleries}
        goToContacts={goToContacts}
        headerRef={headerRef}
        textRef={textRef}
        titleRef={titleRef}
        button1Ref={button1Ref}
        button2Ref={button2Ref}
        arrowRef={arrowRef}
      />

      <SideImage 
        imageRef={imageRef}
      />
    </div>
  )
}

export default Main