import heroMedia from '../../assets/hero/hero-media.png'
import playCircle from '../../assets/hero/play-circle.svg'
import styles from './HeroMedia.module.css'

function HeroMedia() {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={heroMedia} alt="Stadium match preview" />
      <button type="button" className={styles.playButton} aria-label="Play video">
        <img src={playCircle} alt="" width="28" height="28" />
      </button>
    </div>
  )
}

export default HeroMedia
