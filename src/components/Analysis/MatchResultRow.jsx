import styles from './MatchResultRow.module.css'

const RESULT_STYLES = {
  W: styles.win,
  D: styles.draw,
  L: styles.loss,
}

function MatchResultRow({ opponent, score, result }) {
  return (
    <div className={styles.row}>
      <p className={styles.opponent}>{opponent}</p>
      <div className={styles.outcome}>
        <p className={styles.score}>{score}</p>
        <div className={`${styles.badge} ${RESULT_STYLES[result]}`}>
          <p>{result}</p>
        </div>
      </div>
    </div>
  )
}

export default MatchResultRow
