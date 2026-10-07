import Logo from './Logo'
import NavLinks from './NavLinks'
import SoccerBall from './SoccerBall'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <NavLinks />
      <SoccerBall />
    </header>
  )
}

export default Header
