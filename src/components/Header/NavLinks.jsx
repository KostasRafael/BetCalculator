import { NavLink } from 'react-router-dom'
import styles from './NavLinks.module.css'

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Leagues', to: '/leagues' },
  { label: 'Fixtures', to: '/fixtures' },
  { label: 'Analysis', to: '/analysis' },
]

function NavLinks() {
  return (
    <nav className={styles.navLinks}>
      {LINKS.map(({ label, to }) => (
        <NavLink
          key={label}
          to={to}
          end={to === '/'}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}

export default NavLinks
