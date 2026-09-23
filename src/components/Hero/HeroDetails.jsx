import HeroBadge from './HeroBadge'
import HeroActions from './HeroActions'
import HeroStats from './HeroStats'
import styles from './HeroDetails.module.css'

function HeroDetails() {
  return (
    <div className={styles.details}>
      <div className={styles.intro}>
        <HeroBadge>VERSION 2.4 LIVE</HeroBadge>
        <h1 className={styles.heading}>
          Welcome to <span className={styles.highlight}>Bet Calculator</span>
        </h1>
      </div>
      <p className={styles.description}>
        Make informed football betting decisions with direct access to comprehensive fixture
        data, team statistics, mathematical odds conversion, and historical performance models.
      </p>
      <HeroActions />
      <HeroStats />
    </div>
  )
}

export default HeroDetails
