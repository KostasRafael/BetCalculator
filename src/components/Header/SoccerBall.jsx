import styles from './SoccerBall.module.css'

const OUTER_PATCHES = [
  '20 9.5 15.24 6.05 17.06 0.45 22.94 0.45 24.76 6.05',
  '29.99 16.76 31.8 11.17 37.68 11.17 39.5 16.76 34.74 20.21',
  '26.17 28.49 32.05 28.49 33.87 34.08 29.11 37.54 24.36 34.08',
  '13.83 28.49 15.64 34.08 10.89 37.54 6.13 34.08 7.95 28.49',
  '10.01 16.76 5.26 20.21 0.5 16.76 2.32 11.17 8.2 11.17',
]

const SEAMS = [
  'M20 14V9.5',
  'M25.71 18.15L29.99 16.76',
  'M23.53 24.85L26.17 28.49',
  'M16.47 24.85L13.83 28.49',
  'M14.29 18.15L10.01 16.76',
  'M24.76 6.05L31.8 11.17',
  'M34.74 20.21L32.05 28.49',
  'M24.36 34.08H15.64',
  'M7.95 28.49L5.26 20.21',
  'M8.2 11.17L15.24 6.05',
]

function SoccerBall() {
  return (
    <svg
      className={styles.ball}
      viewBox="0 0 40 40"
      width="40"
      height="40"
      role="img"
      aria-label="Soccer ball"
    >
      <defs>
        <clipPath id="soccer-ball-clip">
          <circle cx="20" cy="20" r="18" />
        </clipPath>
      </defs>
      <circle cx="20" cy="20" r="18" fill="#ffffff" />
      <g clipPath="url(#soccer-ball-clip)" fill="#0b0c10" stroke="#0b0c10" strokeWidth="1" strokeLinejoin="round">
        <polygon points="20 14 25.71 18.15 23.53 24.85 16.47 24.85 14.29 18.15" />
        {OUTER_PATCHES.map((points) => (
          <polygon key={points} points={points} />
        ))}
        {SEAMS.map((d) => (
          <path key={d} d={d} fill="none" />
        ))}
      </g>
      <circle cx="20" cy="20" r="18" fill="none" stroke="#10b981" strokeWidth="1.5" />
    </svg>
  )
}

export default SoccerBall
