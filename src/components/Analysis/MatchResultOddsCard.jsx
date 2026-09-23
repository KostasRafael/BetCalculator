import OddsRow from './OddsRow'
import styles from './MatchResultOddsCard.module.css'

function MatchResultOddsCard({ status, error, outcomes }) {
  return (
    <div className={styles.card}>
      <div className={styles.intro}>
        <p className={styles.title}>Match Result Odds Calculator</p>
        <p className={styles.description}>
          Input current market odds to output mathematical implied win probability.
        </p>
      </div>
      {status === 'idle' || status === 'loading' ? (
        <p className={styles.message}>Loading odds…</p>
      ) : status === 'error' ? (
        <p className={styles.message}>Couldn't load odds: {error}</p>
      ) : !outcomes ? (
        <p className={styles.message}>No market odds available for this fixture yet.</p>
      ) : (
        <div className={styles.rows}>
          {outcomes.map((outcome) => (
            <OddsRow key={outcome.label} {...outcome} />
          ))}
        </div>
      )}
    </div>
  )
}

export default MatchResultOddsCard
