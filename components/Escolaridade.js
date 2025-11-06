import styles from '../styles/Section.module.css'

export default function Escolaridade() {
  const educacao = [
    {
      periodo: '2024 – 2025',
      curso: 'Técnico em Desenvolvimento de Sistemas',
      instituicao: 'SENAI 564, Valinhos – SP'
    },
    {
      periodo: '2023 – 2025',
      curso: 'Ensino Médio',
      instituicao: 'SESI 299, Valinhos – SP'
    }
  ]

  return (
    <section id="escolaridade" className={styles.section}>
      <div className={styles.sectionHeader}>
        <i className="fas fa-graduation-cap"></i>
        <h2>Escolaridade</h2>
      </div>
      <div className={styles.content}>
        {educacao.map((edu, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelinePeriod}>{edu.periodo}</div>
            <div className={styles.timelineContent}>
              <h3>{edu.curso}</h3>
              <p>{edu.instituicao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
