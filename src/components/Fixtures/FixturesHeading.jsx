import { Link } from 'react-router-dom'
import arrowLeft from '../../assets/fixtures/arrow-left.svg'
import styles from './FixturesHeading.module.css'

function FixturesHeading({ league }) {
  return (
    <div className={styles.heading}>
      <Link to="/leagues" className={styles.backLink}>
        <img src={arrowLeft} alt="" width="16" height="16" />
        <span>Back to League Selection</span>
      </Link>
      <p className={styles.title}>{league}</p>
    </div>
  )
}

export default FixturesHeading
