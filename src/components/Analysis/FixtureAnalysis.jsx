import { Link } from 'react-router-dom'
import { useLeagues } from '../../store/LeaguesContext'
import { buildAverageGoalsStat, getTeamFormProps } from '../../utils/teamForm'
import { buildMatchResultOdds, buildGoalsOddsLines } from '../../utils/odds'
import AnalysisHeading from './AnalysisHeading'
import TeamFormComparison from './TeamFormComparison'
import AverageGoalsCard from './AverageGoalsCard'
import MatchResultOddsCard from './MatchResultOddsCard'
import GoalsOddsCard from './GoalsOddsCard'
import styles from './FixtureAnalysis.module.css'

const EMPTY_FORM = { status: 'idle', data: [], error: null }
const EMPTY_ODDS = { status: 'idle', data: [], error: null }

function FixtureAnalysis() {
  const { selectedFixture, teamForm, odds } = useLeagues()

  if (!selectedFixture) {
    return (
      <section className={styles.container}>
        <p className={styles.empty}>
          Pick a fixture on the{' '}
          <Link to="/fixtures" className={styles.emptyLink}>
            Fixtures
          </Link>{' '}
          page and hit "Analyze" to see team form here.
        </p>
      </section>
    )
  }

  const { home, away } = selectedFixture
  const homeForm = teamForm[home.id] ?? EMPTY_FORM
  const awayForm = teamForm[away.id] ?? EMPTY_FORM
  const fixtureOdds = odds[selectedFixture.id] ?? EMPTY_ODDS

  const stats = [
    buildAverageGoalsStat(home.id, home.name, homeForm),
    buildAverageGoalsStat(away.id, away.name, awayForm),
  ]

  const matchResultOutcomes =
    fixtureOdds.status === 'ready' ? buildMatchResultOdds(fixtureOdds.data, home.name, away.name) : null
  const goalsLines = fixtureOdds.status === 'ready' ? buildGoalsOddsLines(fixtureOdds.data) : []

  return (
    <section className={styles.container}>
      <AnalysisHeading matchup={`${home.name} vs ${away.name}`} />
      <div className={styles.splitLayout}>
        <div className={styles.leftCol}>
          <TeamFormComparison
            home={getTeamFormProps(home.id, home.name, homeForm)}
            away={getTeamFormProps(away.id, away.name, awayForm)}
          />
          <AverageGoalsCard stats={stats} />
        </div>
        <div className={styles.rightCol}>
          <MatchResultOddsCard
            status={fixtureOdds.status}
            error={fixtureOdds.error}
            outcomes={matchResultOutcomes}
          />
          <GoalsOddsCard status={fixtureOdds.status} error={fixtureOdds.error} lines={goalsLines} />
        </div>
      </div>
    </section>
  )
}

export default FixtureAnalysis
