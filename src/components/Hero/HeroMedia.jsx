import heroMedia from '../../assets/hero/hero-media.png'
import heroVideo from '../../assets/hero/hero-video.mp4'
import styles from './HeroMedia.module.css'

function HeroMedia() {
  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        src={heroVideo}
        poster={heroMedia}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Stadium match preview"
      />
    </div>
  )
}

export default HeroMedia
