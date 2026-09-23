import styles from './GoalsLineRow.module.css'

function GoalsLineRow({ line, over, under }) {
  return (
    <div className={styles.row}>
      <div className={styles.line}>
        <p>{line}</p>
      </div>
      <div className={styles.cell}>
        <div className={`${styles.oddsBox} ${styles.over}`}>
          <p>{over.odds}</p>
        </div>
        <p className={styles.overProbability}>{over.probability}</p>
      </div>
      <div className={styles.cell}>
        <div className={`${styles.oddsBox} ${styles.under}`}>
          <p>{under.odds}</p>
        </div>
        <p className={styles.underProbability}>{under.probability}</p>
      </div>
    </div>
  )
}

export default GoalsLineRow
