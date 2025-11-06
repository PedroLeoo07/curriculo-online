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

  const downloadPDF = () => {
    // Carrega a biblioteca html2pdf dinamicamente
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = () => {
      const element = document.querySelector('main');
      const opt = {
        margin: 10,
        filename: 'curriculo-leonardo-oliveira.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      
      // Gera o PDF
      window.html2pdf().set(opt).from(element).save();
    };
    document.head.appendChild(script);
  }

  return (
    <header className={styles.header}>
      <div className={styles.heroSection}>
        <div className={styles.profileImage}>
          <img src="/perfil.jpg" alt="Leonardo Oliveira" />
        </div>
        <h1 className={styles.name}>Leonardo Oliveira</h1>
        <h2 className={styles.title}>Desenvolvedor Full Stack</h2>
        
        <div className={styles.contactsGrid}>
          <a href="tel:+5519988727143" className={styles.contactCard}>
            <i className="fas fa-phone"></i>
            <span>(19) 98872-7143</span>
          </a>
          <a href="mailto:leonardopedrodeoliveira07@gmail.com" className={styles.contactCard}>
            <i className="fas fa-envelope"></i>
            <span>leonardopedrodeoliveira07@gmail.com</span>
          </a>
          <a href="https://github.com/PedroLeoo07" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
            <i className="fab fa-github"></i>
            <span>github.com/PedroLeoo07</span>
          </a>
          <a href="https://linkedin.com/in/devleonardooliveira" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
            <i className="fab fa-linkedin"></i>
            <span>linkedin.com/in/devleonardooliveira</span>
          </a>
        </div>

        <div className={styles.actions}>
          <button onClick={downloadPDF} className={styles.btnDownload}>
            <i className="fas fa-download"></i>
            Download PDF
          </button>
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
