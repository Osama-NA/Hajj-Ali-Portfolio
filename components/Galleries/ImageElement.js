import React from 'react'

const ImageElement = ({ name, img, setViewImage, setImage }) => {

    const handleViewImage = () => {
      setViewImage(true)
      setImage(img)
    }
    
    return (
      <div
        className={name}
        onClick={handleViewImage}
        style={{
          background: `url('${img}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </div>
    )
  }

export default ImageElement