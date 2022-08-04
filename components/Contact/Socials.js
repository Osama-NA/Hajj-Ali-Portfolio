import React from 'react'
import styles from '../../styles/Contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Socials = ({
    link1Ref,
    link2Ref,
    link3Ref,
    link4Ref
}) => {
  return (
    <div className={styles.socials}>
        <SocialsLink
            icon={faInstagram}
            href='https://www.instagram.com/el_hajjali/'
            linkRef={link1Ref}
        />
        <SocialsLink
            icon={faWhatsapp}
            href='https://wa.me/0096171563922'
            linkRef={link2Ref}
        />
        <SocialsLink
            icon={faEnvelope}
            href='mailto:mohdali97@outlook.com'
            linkRef={link3Ref}
        />
        <SocialsLink
            icon={faLinkedinIn}
            href='https://www.linkedin.com/in/mohammed-el-haj-ali'
            linkRef={link4Ref}
        />
    </div>
  )
}

const SocialsLink = ({ icon, href, linkRef }) => {
    return (
        <a href={href} target='_blank' className={styles.link} rel="noreferrer" ref={linkRef}>
            <FontAwesomeIcon icon={icon} />
        </a>
    )
}

export default Socials