import styles from './FixtureRow.module.css'

function FixtureRow({ date, time, home, away, odds, highlighted = false, onAnalyze }) {
  return (
    <div className={highlighted ? `${styles.row} ${styles.highlighted}` : styles.row}>
      <div className={styles.kickoff}>
        <p className={styles.date}>{date}</p>
        <p className={styles.time}>{time}</p>
      </div>

      <div className={styles.matchup}>
        <div className={styles.team}>
          <p className={styles.teamName}>{home.name}</p>
          <img className={styles.crest} src={home.crest} alt="" width="24" height="24" />
        </div>
        <div className={styles.vs}>
          <p>VS</p>
        </div>
        <div className={`${styles.team} ${styles.teamAway}`}>
          <img className={styles.crest} src={away.crest} alt="" width="24" height="24" />
          <p className={styles.teamName}>{away.name}</p>
        </div>
      </div>

      <div className={styles.actions}>
        <div className={styles.odds}>
          <p className={styles.oddsLabel}>PRE-MATCH ODDS</p>
          <p className={styles.oddsValue}>{odds}</p>
        </div>
        <button
          type="button"
          onClick={onAnalyze}
          className={highlighted ? `${styles.analyze} ${styles.analyzeHighlighted}` : styles.analyze}
        >
          Analyze
        </button>
      </div>
    </div>
  )
}

export default FixtureRow
