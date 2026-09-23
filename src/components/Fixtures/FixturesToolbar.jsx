import FixturesHeading from './FixturesHeading'
import FixturesFilter from './FixturesFilter'
import styles from './FixturesToolbar.module.css'

function FixturesToolbar({ league, filterLabel }) {
  return (
    <div className={styles.toolbar}>
      <FixturesHeading league={league} />
      <FixturesFilter label={filterLabel} />
    </div>
  )
}

export default FixturesToolbar
