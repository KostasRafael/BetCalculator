import userAvatar from '../../assets/header/user-avatar.png'
import styles from './UserProfile.module.css'

function UserProfile({ name = 'Premium Bettor', tier = 'Tier Active' }) {
  return (
    <div className={styles.userProfile}>
      <div className={styles.details}>
        <p className={styles.name}>{name}</p>
        <p className={styles.tier}>{tier}</p>
      </div>
      <img className={styles.avatar} src={userAvatar} alt={name} width="40" height="40" />
    </div>
  )
}

export default UserProfile
