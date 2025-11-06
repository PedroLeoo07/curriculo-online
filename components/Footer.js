import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          <i className="fas fa-code"></i>
          Desenvolvido por Leonardo Oliveira © 2025 – Todos os direitos reservados.
        </p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/PedroLeoo07" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/devleonardooliveira" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:leonardopedrodeoliveira07@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
