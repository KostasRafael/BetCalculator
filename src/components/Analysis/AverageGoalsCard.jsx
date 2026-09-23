import styles from './AverageGoalsCard.module.css'

function AverageGoalsCard({ stats }) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>Average Goals (Last 10 Matches)</p>
      <div className={styles.stats}>
        {stats.map(({ label, value, caption }) => (
          <div key={label} className={styles.stat}>
            <p className={styles.statLabel}>{label}</p>
            <p className={styles.statValue}>{value}</p>
            <p className={styles.statCaption}>{caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AverageGoalsCard
