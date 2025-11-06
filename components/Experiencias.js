import styles from '../styles/Section.module.css'

export default function Experiencias() {
  const projetos = [
    { nome: 'PlayStation API', tipo: 'Front-end', tech: 'Next.js' },
    { nome: 'TurboX', tipo: 'Full Stack Mobile', tech: 'Front, Back e Banco de Dados' },
    { nome: 'FunDev', tipo: 'Front-end', tech: 'HTML, CSS, JS' },
    { nome: 'ChatBoxIA', tipo: 'Front-end', tech: 'JavaScript' },
    { nome: 'EA-FC API', tipo: 'Full Stack', tech: 'TypeScript, Back-end, Front-end e Banco de Dados' }
  ]

  return (
    <section id="experiencias" className={styles.section}>
      <div className={styles.sectionHeader}>
        <i className="fas fa-briefcase"></i>
        <h2>Experiências</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.experienceItem}>
          <div className={styles.experienceHeader}>
            <div>
              <h3>Desenvolvedor Web Full Stack</h3>
              <p className={styles.company}>
                <i className="fas fa-building"></i>
                Freelancer
              </p>
            </div>
            <div className={styles.experiencePeriod}>2024 – Atual</div>
          </div>
          
          <ul className={styles.responsibilidades}>
            <li>Criação de aplicações completas, integrando front-end, back-end e bancos de dados</li>
            <li>Desenvolvimento de APIs RESTful e integração com sistemas externos</li>
            <li>Otimização de performance, segurança e experiência do usuário</li>
          </ul>

          <div className={styles.projetos}>
            <h4>
              <i className="fas fa-project-diagram"></i>
              Projetos Desenvolvidos
            </h4>
            <div className={styles.projetosGrid}>
              {projetos.map((projeto, index) => (
                <div key={index} className={styles.projetoCard}>
                  <div className={styles.projetoHeader}>
                    <i className="fas fa-code-branch"></i>
                    <strong>{projeto.nome}</strong>
                  </div>
                  <p className={styles.projetoTipo}>{projeto.tipo}</p>
                  <p className={styles.projetoTech}>{projeto.tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
