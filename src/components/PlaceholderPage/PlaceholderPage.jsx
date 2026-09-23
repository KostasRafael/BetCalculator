import styles from './PlaceholderPage.module.css'

function PlaceholderPage({ title, description }) {
  return (
    <section className={styles.page}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </section>
  )
}

export default PlaceholderPage
