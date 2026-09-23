import Logo from './Logo'
import NavLinks from './NavLinks'
import UserProfile from './UserProfile'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <NavLinks />
      <UserProfile />
    </header>
  )
}

export default Header
