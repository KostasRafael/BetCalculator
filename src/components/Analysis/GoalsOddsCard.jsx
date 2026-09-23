import GoalsLineRow from './GoalsLineRow'
import styles from './GoalsOddsCard.module.css'

function GoalsOddsCard({ status, error, lines }) {
  return (
    <div className={styles.card}>
      <div className={styles.intro}>
        <p className={styles.title}>Goals Odds Calculator</p>
        <p className={styles.description}>
          Enter Over/Under odds to see percentage probabilities of match totals.
        </p>
      </div>
      {status === 'idle' || status === 'loading' ? (
        <p className={styles.message}>Loading odds…</p>
      ) : status === 'error' ? (
        <p className={styles.message}>Couldn't load odds: {error}</p>
      ) : lines.length === 0 ? (
        <p className={styles.message}>No goals market odds available for this fixture yet.</p>
      ) : (
        <>
          <div className={styles.tableHeader}>
            <p className={styles.lineHeader}>LINE</p>
            <p className={styles.columnHeader}>OVER ODDS / %</p>
            <p className={styles.columnHeader}>UNDER ODDS / %</p>
          </div>
          <div className={styles.rows}>
            {lines.map((line) => (
              <GoalsLineRow key={line.line} {...line} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default GoalsOddsCard
