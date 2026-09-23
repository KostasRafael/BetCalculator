import HeroDetails from './HeroDetails'
import HeroMedia from './HeroMedia'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <HeroDetails />
      <HeroMedia />
    </section>
  )
}

export default Hero
