import styles from '../../styles/Galleries.module.scss'

const Corners = () => {
    return (
      <>
        <Corner name={styles.corner_1} />
        <Corner name={styles.corner_2} />
        <Corner name={styles.corner_3} />
        <Corner name={styles.corner_4} />
      </>
    )
  }
  
  const Corner = ({ name }) => {
    return (
      <div className={name}>
        <div className={styles.inner_corner}></div>
      </div>
    )
  }
  
  export default Corners