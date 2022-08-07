import React, {useEffect, useState} from 'react'
import styles from '../../styles/Main.module.scss'
import useMediaQuery from "../../utils/useMediaQuery"

const SideImage = ({imageRef}) => {
  const [position, setPosition] = useState('0px')

  const isSmallScreen = useMediaQuery("(max-width: 900px)")
  const isMobileScreen = useMediaQuery("(max-width: 600px)")

  useEffect(() => {
      if(isSmallScreen){
        if(isMobileScreen){
          setPosition('-35px')
        }
        else{
          setPosition('-100px')
        }
      }
      else{
        setPosition('0px')
      }
  }, [isSmallScreen,isMobileScreen ])

  return (
    <aside 
        className={styles.side_image}
        style={{
            background: `url('https://res.cloudinary.com/mohamad-hamoudii/image/upload/v1659656107/main_img-a09Hxjhs_wsw3je.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: position,
        }}
        ref={imageRef}
    >
        <div className={styles.image_square}></div>
    </aside>
  )
}

export default SideImage