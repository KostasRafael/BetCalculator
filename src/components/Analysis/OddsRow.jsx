import styles from './OddsRow.module.css'

function OddsRow({ label, odds, probability }) {
  return (
    <div className={styles.row}>
      <p className={styles.label}>{label}</p>
      <div className={styles.values}>
        <div className={styles.oddsBox}>
          <p>{odds}</p>
        </div>
        <p className={styles.probability}>{probability}</p>
      </div>
    </div>
  )
}

export default OddsRow
