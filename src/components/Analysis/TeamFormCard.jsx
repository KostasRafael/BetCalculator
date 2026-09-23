import MatchResultRow from './MatchResultRow'
import styles from './TeamFormCard.module.css'

function TeamFormCard({ team, status, error, matches }) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{team} – Last 10 Matches</p>
      {status === 'idle' || status === 'loading' ? (
        <p className={styles.message}>Loading recent form…</p>
      ) : status === 'error' ? (
        <p className={styles.message}>Couldn't load recent form: {error}</p>
      ) : matches.length === 0 ? (
        <p className={styles.message}>No recent matches found.</p>
      ) : (
        <div className={styles.list}>
          {matches.map((match, index) => (
            <MatchResultRow key={`${match.opponent}-${index}`} {...match} />
          ))}
        </div>
      )}
    </div>
  )
}

export default TeamFormCard
