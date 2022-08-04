import React from 'react'
import ImageElement from './ImageElement'

const Images = ({images, setImage, setViewImage}) => {
    return images.map((img, id) => {
      return <ImageElement
        key={id}
        name={img.name}
        setViewImage={setViewImage}
        setImage={setImage}
        img={img.image}
      />
    })
  }

export default Images