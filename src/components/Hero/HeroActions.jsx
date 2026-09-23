import arrowRight from '../../assets/hero/arrow-right.svg'
import styles from './HeroActions.module.css'

function HeroActions() {
  return (
    <div className={styles.actions}>
      <a href="#" className={styles.primary}>
        <span>Get Started Now</span>
        <img className={styles.icon} src={arrowRight} alt="" width="16" height="16" />
      </a>
      <a href="#" className={styles.secondary}>
        <span>View Pricing</span>
      </a>
    </div>
  )
}

export default HeroActions
