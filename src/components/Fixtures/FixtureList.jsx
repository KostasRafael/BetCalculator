import { useNavigate } from 'react-router-dom'
import { useLeagues } from '../../store/LeaguesContext'
import { formatFixtureDate, formatFixtureTime } from '../../utils/formatFixtureDate'
import FixtureRow from './FixtureRow'
import styles from './FixtureList.module.css'

function FixtureList() {
  const { selectedLeague, fixtures, selectFixture } = useLeagues()
  const navigate = useNavigate()
  const leagueFixtures = fixtures[selectedLeague]

  if (leagueFixtures.status === 'idle' || leagueFixtures.status === 'loading') {
    return <p className={styles.message}>Loading fixtures…</p>
  }

  if (leagueFixtures.status === 'error') {
    return <p className={styles.message}>Couldn't load fixtures: {leagueFixtures.error}</p>
  }

  if (leagueFixtures.data.length === 0) {
    return <p className={styles.message}>No upcoming fixtures found.</p>
  }

  const handleAnalyze = (fixture) => {
    selectFixture({
      id: fixture.fixture.id,
      date: fixture.fixture.date,
      league: { id: fixture.league.id, name: fixture.league.name },
      home: {
        id: fixture.teams.home.id,
        name: fixture.teams.home.name,
        logo: fixture.teams.home.logo,
      },
      away: {
        id: fixture.teams.away.id,
        name: fixture.teams.away.name,
        logo: fixture.teams.away.logo,
      },
    })
    navigate('/analysis')
  }

  return (
    <div className={styles.list}>
      {leagueFixtures.data.map((fixture, index) => (
        <FixtureRow
          key={fixture.fixture.id}
          date={formatFixtureDate(fixture.fixture.date)}
          time={formatFixtureTime(fixture.fixture.date)}
          home={{ name: fixture.teams.home.name, crest: fixture.teams.home.logo }}
          away={{ name: fixture.teams.away.name, crest: fixture.teams.away.logo }}
          odds="—"
          highlighted={index === 0}
          onAnalyze={() => handleAnalyze(fixture)}
        />
      ))}
    </div>
  )
}

export default FixtureList
