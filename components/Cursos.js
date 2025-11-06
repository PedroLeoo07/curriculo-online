import styles from '../styles/Section.module.css'

export default function Cursos() {
  const cursos = [
    {
      periodo: '2019 – 2022',
      nome: 'Designer de Games',
      instituicao: 'MC Valinhos – SP',
      descricao: 'Jogos 2D/3D, Modelagem 3D, Level Design, Unreal Engine, Construct'
    },
    {
      periodo: '2023 – 2025',
      nome: 'Informática',
      instituicao: 'MC Valinhos – SP',
      descricao: 'Web Design, Pacote Office, Pacote Adobe, Edição de vídeo'
    },
    {
      periodo: '2021',
      nome: 'Jovem Aprendiz',
      instituicao: 'Microlins – Vinhedo – SP',
      descricao: 'Dicas para o mercado de trabalho'
    }
  ]

  return (
    <section id="cursos" className={styles.section}>
      <div className={styles.sectionHeader}>
        <i className="fas fa-certificate"></i>
        <h2>Cursos Complementares</h2>
      </div>
      <div className={styles.content}>
        {cursos.map((curso, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelinePeriod}>{curso.periodo}</div>
            <div className={styles.timelineContent}>
              <h3>{curso.nome}</h3>
              <p className={styles.institution}>{curso.instituicao}</p>
              <p className={styles.description}>{curso.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
