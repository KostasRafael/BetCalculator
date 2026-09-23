import TeamFormCard from './TeamFormCard'
import styles from './TeamFormComparison.module.css'

function TeamFormComparison({ home, away }) {
  return (
    <div className={styles.comparison}>
      <TeamFormCard {...home} />
      <TeamFormCard {...away} />
    </div>
  )
}

export default TeamFormComparison
