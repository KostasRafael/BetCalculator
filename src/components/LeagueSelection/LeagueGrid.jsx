import { useNavigate } from 'react-router-dom'
import { LEAGUES_CONFIG } from '../../config/leagues'
import { useLeagues } from '../../store/LeaguesContext'
import LeagueCard from './LeagueCard'
import styles from './LeagueGrid.module.css'

function LeagueGrid() {
  const { selectedLeague, selectLeague } = useLeagues()
  const navigate = useNavigate()

  const handleSelect = (key) => {
    selectLeague(key)
    navigate('/fixtures')
  }

  return (
    <div className={styles.grid}>
      {LEAGUES_CONFIG.map((league) => (
        <LeagueCard
          key={league.key}
          image={league.image}
          flag={league.flag}
          country={league.country}
          name={league.name}
          active={selectedLeague === league.key}
          onSelect={() => handleSelect(league.key)}
        />
      ))}
    </div>
  )
}

export default LeagueGrid
