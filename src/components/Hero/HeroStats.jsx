import styles from './HeroStats.module.css'

const STATS = [
  { value: '25k+', label: 'Active Bettors' },
  { value: '99.2%', label: 'Calculated Accuracy' },
  { value: '4', label: 'Top Tier Leagues' },
]

function HeroStats() {
  return (
    <div className={styles.stats}>
      {STATS.map(({ value, label }) => (
        <div key={label} className={styles.stat}>
          <p className={styles.value}>{value}</p>
          <p className={styles.label}>{label}</p>
        </div>
      ))}
    </div>
  )
}

export default HeroStats
