import styles from './LeagueSelectionHeading.module.css'

function LeagueSelectionHeading() {
  return (
    <div className={styles.heading}>
      <p className={styles.title}>Choose a League</p>
      <p className={styles.description}>
        Select one of the elite active leagues to calculate odds, analyze recent forms, and
        review fixture records.
      </p>
    </div>
  )
}

export default LeagueSelectionHeading
