import styles from '../styles/Section.module.css'

export default function Objetivo() {
  return (
    <section id="objetivo" className={styles.section}>
      <div className={styles.sectionHeader}>
        <i className="fas fa-bullseye"></i>
        <h2>Objetivo Profissional</h2>
      </div>
      <div className={styles.content}>
        <p>
          Desenvolvedor Full Stack, especializado em JavaScript, React, Node.js e APIs RESTful, 
          com experiência em desenvolvimento web e mobile, integração de sistemas e bancos de dados 
          relacionais (PostgreSQL, MySQL).
        </p>
        <p>
          Busco atuar em equipes ágeis, aplicando boas práticas de código, testes e documentação, 
          garantindo soluções escaláveis, seguras e de alta performance.
        </p>
      </div>
    </section>
  )
}
