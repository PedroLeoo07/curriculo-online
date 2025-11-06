import styles from '../styles/Header.module.css'
import Image from 'next/image'

export default function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.heroSection}>
        <div className={styles.profileImage}>
          <img src="/perfil.jpg" alt="Leonardo Oliveira" />
        </div>
        <h1 className={styles.name}>Leonardo Oliveira</h1>
        <h2 className={styles.title}>Desenvolvedor Full Stack</h2>
        
        <div className={styles.contacts}>
          <a href="tel:+5519988727143" className={styles.contactItem}>
            <i className="fas fa-phone"></i>
            (19) 98872-7143
          </a>
          <a href="mailto:leonardopedrodeoliveira07@gmail.com" className={styles.contactItem}>
            <i className="fas fa-envelope"></i>
            leonardopedrodeoliveira07@gmail.com
          </a>
          <a href="https://github.com/PedroLeoo07" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
            <i className="fab fa-github"></i>
            github.com/PedroLeoo07
          </a>
          <a href="https://linkedin.com/in/devleonardooliveira" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
            <i className="fab fa-linkedin"></i>
            linkedin.com/in/devleonardooliveira
          </a>
        </div>

        <div className={styles.actions}>
          <a href="/curriculo-leonardo-oliveira.pdf" download className={styles.btnDownload}>
            <i className="fas fa-download"></i>
            Download Currículo
          </a>
          <a href="mailto:leonardopedrodeoliveira07@gmail.com" className={styles.btnContact}>
            <i className="fas fa-paper-plane"></i>
            Entrar em Contato
          </a>
        </div>
      </div>

      <nav className={styles.nav}>
        <button onClick={() => scrollToSection('objetivo')} className={styles.navLink}>Objetivo</button>
        <button onClick={() => scrollToSection('escolaridade')} className={styles.navLink}>Escolaridade</button>
        <button onClick={() => scrollToSection('cursos')} className={styles.navLink}>Cursos</button>
        <button onClick={() => scrollToSection('habilidades')} className={styles.navLink}>Habilidades</button>
        <button onClick={() => scrollToSection('experiencias')} className={styles.navLink}>Experiências</button>
      </nav>
    </header>
  )
}
