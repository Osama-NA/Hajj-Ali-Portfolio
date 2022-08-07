import React, {useEffect, useState} from 'react'
import styles from '../../styles/Contact.module.scss'
import useMediaQuery from "../../utils/useMediaQuery"
import Socials from "./Socials"

const ContactInfo = ({
    imageRef,
    title1Ref,
    textRef,
    link1Ref,
    link2Ref,
    link3Ref,
    link4Ref
}) => {
    const isMobileScreen = useMediaQuery("(max-width: 769px)")
    const [textElement, setTextElement] = useState(<p ref={textRef}></p>)

    useEffect(() => {
        setTextElement(<Text isMobileScreen={isMobileScreen} textRef={textRef}/>)
    }, [isMobileScreen, textRef])

    return (
        <div className={styles.contact_info}>
            <div className={styles.triangle} ref={imageRef}>
                <div
                    className={styles.image}
                    style={{
                        background: `url('https://res.cloudinary.com/mohamad-hamoudii/image/upload/v1659656104/mhmd-XR9Hxjhs_chtwyr.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPositionY: -30,
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                </div>
            </div>

            <h2 ref={title1Ref}>
                Let{'\''}s work together<span>!</span>
            </h2>
            {textElement}

            <Socials 
                link1Ref={link1Ref}
                link2Ref={link2Ref}
                link3Ref={link3Ref}
                link4Ref={link4Ref}
            />
        </div>
    )
}

const Text = ({isMobileScreen, textRef}) => {
    return isMobileScreen ? (
                <p ref={textRef}>
                    Send me a message or Get in touch
                    <br /> 
                    using the socials below.
                </p>
    ) :(
        <p ref={textRef}>
            Send me a message or Get in
            <br />
            touch using the socials below.
        </p>
    )
}

export default ContactInfo