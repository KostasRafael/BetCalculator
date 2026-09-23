import LeagueSelectionHeading from './LeagueSelectionHeading'
import LeagueGrid from './LeagueGrid'
import styles from './LeagueSelection.module.css'

function LeagueSelection() {
  return (
    <section className={styles.container}>
      <LeagueSelectionHeading />
      <LeagueGrid />
    </section>
  )
}

export default LeagueSelection
