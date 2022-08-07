import React, { useEffect, useRef, useState } from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import styles from '../../styles/Contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import useMediaQuery from "../../utils/useMediaQuery"

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}

const imageAnimation = 'fadeIn .4s  ease-out .25s forwards'
const title1Animation = 'fadeIn .4s  ease-out .5s forwards'
const textAnimation = 'fadeIn .4s  ease-out .5s forwards'
const link1Animation = 'slideUp .25s  ease-out .75s forwards'
const link2Animation = 'slideUp .25s  ease-out .9s forwards'
const link3Animation = 'slideUp .25s  ease-out 1.05s forwards'
const link4Animation = 'slideUp .25s  ease-out 1.25s forwards'
const title2Animation = 'fadeIn .4s  ease-out 1.4s forwards'
const input1Animation = 'fadeIn .4s  ease-out 1.65s forwards'
const input2Animation = 'fadeIn .4s  ease-out 1.65s forwards'
const textareaAnimation = 'fadeIn .4s  ease-out 1.65s forwards'
const buttonAnimation = 'slideUp .4s  ease-out 1.8s forwards'
const arrowAnimation = 'fadeIn 1s  ease-out 2.05s forwards'

const title2MobileAnimation = 'fadeIn .4s  ease-out .0s forwards'
const input1MobileAnimation = 'fadeIn .4s  ease-out .25s forwards'
const input2MobileAnimation = 'fadeIn .4s  ease-out .25s forwards'
const textareaMobileAnimation = 'fadeIn .4s  ease-out .25s forwards'
const buttonMobileAnimation = 'slideUp .4s  ease-out .5s forwards'
const imageMobileAnimation = 'fadeIn .4s  ease-out .75s forwards'
const title1MobileAnimation = 'fadeIn .4s  ease-out .9s forwards'
const textMobileAnimation = 'fadeIn .4s  ease-out 1.05s forwards'
const link1MobileAnimation = 'slideUp .25s  ease-out  1.2s forwards'
const link2MobileAnimation = 'slideUp .25s  ease-out 1.3s forwards'
const link3MobileAnimation = 'slideUp .25s  ease-out 1.4s forwards'
const link4MobileAnimation = 'slideUp .25s  ease-out 1.5s forwards'
const arrowMobileAnimation = 'fadeIn 1s  ease-out 1.75s forwards'

const Contact = ({ contactsRef }) => {
    const [isVisible, setIsVisible] = useState(false);

    const isMobileScreen = useMediaQuery("(max-width: 600px)")

    const imageRef = useRef()
    const title1Ref = useRef()
    const textRef = useRef()
    const link1Ref = useRef()
    const link2Ref = useRef()
    const link3Ref = useRef()
    const link4Ref = useRef()
    const title2Ref = useRef()
    const input1Ref = useRef()
    const input2Ref = useRef()
    const textareaRef = useRef()
    const buttonRef = useRef()
    const arrowRef = useRef()

    // INTERSECTION OBSERVER
    const observerCallback = entries => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(observerCallback, observerOptions)
        if (contactsRef.current) observer.observe(contactsRef.current)

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (contactsRef.current) observer.unobserve(contactsRef.current)
        }
    }, [contactsRef])

    useEffect(() => {
        if (isVisible) {
            if(isMobileScreen){
                imageRef.current.style.animation = imageMobileAnimation
                title1Ref.current.style.animation = title1MobileAnimation
                textRef.current.style.animation = textMobileAnimation
                title2Ref.current.style.animation = title2MobileAnimation
                link1Ref.current.style.animation = link1MobileAnimation
                link2Ref.current.style.animation = link2MobileAnimation
                link3Ref.current.style.animation = link3MobileAnimation
                link4Ref.current.style.animation = link4MobileAnimation
                input1Ref.current.style.animation = input1MobileAnimation
                input2Ref.current.style.animation = input2MobileAnimation
                textareaRef.current.style.animation = textareaMobileAnimation
                buttonRef.current.style.animation = buttonMobileAnimation
                arrowRef.current.style.animation = arrowMobileAnimation
            }else{
                imageRef.current.style.animation = imageAnimation
                title1Ref.current.style.animation = title1Animation
                textRef.current.style.animation = textAnimation
                title2Ref.current.style.animation = title2Animation
                link1Ref.current.style.animation = link1Animation
                link2Ref.current.style.animation = link2Animation
                link3Ref.current.style.animation = link3Animation
                link4Ref.current.style.animation = link4Animation
                input1Ref.current.style.animation = input1Animation
                input2Ref.current.style.animation = input2Animation
                textareaRef.current.style.animation = textareaAnimation
                buttonRef.current.style.animation = buttonAnimation
                arrowRef.current.style.animation = arrowAnimation
            }
        } else {
            imageRef.current.style.animation = 'none'
            title1Ref.current.style.animation = 'none'
            textRef.current.style.animation = 'none'
            title2Ref.current.style.animation = 'none'
            link1Ref.current.style.animation = 'none'
            link2Ref.current.style.animation = 'none'
            link3Ref.current.style.animation = 'none'
            link4Ref.current.style.animation = 'none'
            input1Ref.current.style.animation = 'none'
            input2Ref.current.style.animation = 'none'
            textareaRef.current.style.animation = 'none'
            buttonRef.current.style.animation = 'none'
            arrowRef.current.style.animation = 'none'
        }
    }, [isMobileScreen, isVisible])

    return (
        <div className={styles.container} ref={contactsRef}>
            <ContactInfo
                imageRef={imageRef}
                title1Ref={title1Ref}
                textRef={textRef}
                link1Ref={link1Ref}
                link2Ref={link2Ref}
                link3Ref={link3Ref}
                link4Ref={link4Ref}
            />
            <ContactForm
                title2Ref={title2Ref}
                input1Ref={input1Ref}
                input2Ref={input2Ref}
                textareaRef={textareaRef}
                buttonRef={buttonRef}
            />
            <ScrollUpElement arrowRef={arrowRef} />
        </div>
    )
}

const ScrollUpElement = ({ arrowRef }) => {
    return (
        <footer
            className={styles.footer}
            onClick={() => window.scrollTo(0, 0)}
            ref={arrowRef}
        >
            <span className={styles.arrow}>
                <FontAwesomeIcon icon={faBackward} color='#292929' />
            </span>
        </footer>
    )
}

export default Contact