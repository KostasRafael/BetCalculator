import percentIcon from '../../assets/header/percent-icon.svg'
import styles from './Logo.module.css'

function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.badge}>
        <img className={styles.icon} src={percentIcon} alt="" width="18" height="18" />
      </div>
      <div className={styles.brandText}>
        <p className={styles.name}>BET CALCULATOR</p>
        <p className={styles.tagline}>PRO ANALYTICS</p>
      </div>
    </div>
  )
}

export default Logo
