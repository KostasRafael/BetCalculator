import chevronRight from '../../assets/leagues/chevron-right.svg'
import styles from './LeagueCard.module.css'

function LeagueCard({ image, flag, country, name, active = false, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={active ? `${styles.card} ${styles.active}` : styles.card}
    >
      <img className={styles.image} src={image} alt="" />
      <div className={styles.body}>
        <div className={styles.row}>
          <div className={styles.info}>
            <p className={styles.flag}>{flag}</p>
            <div className={styles.text}>
              <p className={styles.country}>{country}</p>
              <p className={styles.name}>{name}</p>
            </div>
          </div>
          {active ? (
            <div className={styles.badge}>
              <p className={styles.badgeLabel}>ACTIVE SELECT</p>
            </div>
          ) : (
            <img className={styles.chevron} src={chevronRight} alt="" width="24" height="24" />
          )}
        </div>
      </div>
    </button>
  )
}

export default LeagueCard
