import React from 'react'

const ImageElement = ({ name, img, setViewImage, setImage }) => {
    const handleImageClick = () => {
        setViewImage(true)
        setImage(img)
    }

    return (
        <picture
            className={name}
            onClick={handleImageClick}
        >
            <source srcSet={img} />
            <img src={img} alt="Mohammad Haj-Ali's Portfolio" />
        </picture>
    )
}

export default ImageElement