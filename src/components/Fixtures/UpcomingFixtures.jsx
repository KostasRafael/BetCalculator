import { LEAGUES_CONFIG } from '../../config/leagues'
import { useLeagues } from '../../store/LeaguesContext'
import FixturesToolbar from './FixturesToolbar'
import FixtureList from './FixtureList'
import styles from './UpcomingFixtures.module.css'

function UpcomingFixtures() {
  const { selectedLeague } = useLeagues()
  const league = LEAGUES_CONFIG.find((entry) => entry.key === selectedLeague)

  return (
    <section className={styles.container}>
      <FixturesToolbar league={league.name} filterLabel="Upcoming Fixtures" />
      <FixtureList />
    </section>
  )
}

export default UpcomingFixtures
