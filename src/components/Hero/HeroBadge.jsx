import styles from './HeroBadge.module.css'

function HeroBadge({ children }) {
  return (
    <div className={styles.badge}>
      <p className={styles.label}>{children}</p>
    </div>
  )
}

export default HeroBadge
