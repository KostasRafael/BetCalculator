import chevronDown from '../../assets/fixtures/chevron-down.svg'
import styles from './FixturesFilter.module.css'

function FixturesFilter({ label }) {
  return (
    <button type="button" className={styles.filter}>
      <span>{label}</span>
      <img src={chevronDown} alt="" width="16" height="16" />
    </button>
  )
}

export default FixturesFilter
