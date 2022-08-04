import c1 from '../public/images/galleries/commercial/1.JPG'
import c2 from '../public/images/galleries/commercial/2.JPG'
import c3 from '../public/images/galleries/commercial/3.JPG'
import c4 from '../public/images/galleries/commercial/4.JPG'
import c5 from '../public/images/galleries/commercial/5.JPG'
import styles from '../styles/Galleries.module.scss'

const galleries = [
    {
        name: 'Products',
        images: [
            {
                name: styles.a,
                image: c1.src
            },
            {
                name: styles.b,
                image: c3.src
            },
            {
                name: styles.c,
                image: c2.src
            },
            {
                name: styles.d,
                image: c4.src
            },
            {
                name: styles.e,
                image: c5.src
            },
        ],
    }
]

export default galleries