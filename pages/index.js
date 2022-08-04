import {useState, useEffect, useRef, useCallback} from 'react'
import styles from '../styles/Home.module.scss'
import Meta from '../components/Meta'
import Main from '../components/Main/Main'
import Galleries from '../components/Galleries/Galleries'
import Contact from '../components/Contact/Contact'
import LoadingPage from '../components/LoadingPage'
import MainFooter from '../components/MainFooter'
import { useRouter } from 'next/router'

const Home = () => {          
  const [loading, setLoading] = useState(true)

  const router = useRouter()
  
  const galleriesRef = useRef()
  const contactsRef = useRef()

  const goToGalleries = useCallback(() => scrollTo(galleriesRef), [])
  const goToContacts = () => scrollTo(contactsRef)

  const scrollTo = e => {
    e.current.scrollIntoView({behavior: 'smooth'})
  }
  
  useEffect(() => {
    if(router.query.to === 'galleries'){
      galleriesRef.current.scrollIntoView()
    }
  }, [goToGalleries, router.query])
  
  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div className={styles.container}>
      <Meta />
      
      { loading && <LoadingPage />}
      
      <Main goToGalleries={goToGalleries} goToContacts={goToContacts} />
      <Galleries galleriesRef={galleriesRef} />
      <Contact contactsRef={contactsRef} />
      <MainFooter />
    </div>
  )
}

export default Home