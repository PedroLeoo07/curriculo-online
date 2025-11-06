import styles from '../styles/Section.module.css'

export default function Habilidades() {
  const hardSkills = [
    { categoria: 'Front-end', skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js'] },
    { categoria: 'Back-end', skills: ['Node.js', 'APIs RESTful'] },
    { categoria: 'Mobile', skills: ['React Native', 'Expo'] },
    { categoria: 'Banco de dados', skills: ['PostgreSQL', 'MySQL'] },
    { categoria: 'Ferramentas', skills: ['Postman', 'VS Code', 'Figma', 'Bootstrap'] },
    { categoria: 'Controle de versão', skills: ['Git', 'GitLab'] }
  ]

  const softSkills = [
    'Comunicação eficaz',
    'Trabalho em equipe',
    'Pensamento crítico',
    'Resolução de problemas',
    'Proatividade',
    'Adaptabilidade',
    'Gestão de tempo'
  ]

  return (
    <section id="habilidades" className={styles.section}>
      <div className={styles.sectionHeader}>
        <i className="fas fa-code"></i>
        <h2>Habilidades</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.skillsGrid}>
          <div className={styles.skillsColumn}>
            <h3 className={styles.skillsTitle}>
              <i className="fas fa-laptop-code"></i>
              Hard Skills
            </h3>
            {hardSkills.map((item, index) => (
              <div key={index} className={styles.skillCategory}>
                <h4>{item.categoria}</h4>
                <div className={styles.skillTags}>
                  {item.skills.map((skill, idx) => (
                    <span key={idx} className={styles.skillTag}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.skillsColumn}>
            <h3 className={styles.skillsTitle}>
              <i className="fas fa-users"></i>
              Soft Skills
            </h3>
            <ul className={styles.softSkillsList}>
              {softSkills.map((skill, index) => (
                <li key={index}>
                  <i className="fas fa-check-circle"></i>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
