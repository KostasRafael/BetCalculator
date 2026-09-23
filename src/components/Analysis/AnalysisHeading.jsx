import { Link } from 'react-router-dom'
import arrowLeft from '../../assets/analysis/arrow-left.svg'
import styles from './AnalysisHeading.module.css'

function AnalysisHeading({ matchup }) {
  return (
    <div className={styles.heading}>
      <Link to="/fixtures" className={styles.backLink}>
        <img src={arrowLeft} alt="" width="16" height="16" />
        <span>Back to Fixtures</span>
      </Link>
      <div className={styles.titleRow}>
        <p className={styles.title}>{matchup}</p>
        <div className={styles.badge}>
          <p className={styles.badgeLabel}>LIVE CALCULATOR</p>
        </div>
      </div>
    </div>
  )
}

export default AnalysisHeading
