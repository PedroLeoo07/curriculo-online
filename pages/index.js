import Head from 'next/head'
import Header from '../components/Header'
import Objetivo from '../components/Objetivo'
import Escolaridade from '../components/Escolaridade'
import Cursos from '../components/Cursos'
import Habilidades from '../components/Habilidades'
import Experiencias from '../components/Experiencias'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Currículo Leonardo</title>
        <meta name="description" content="Currículo profissional de Leonardo Oliveira, Desenvolvedor Full Stack especializado em JavaScript, React, Node.js e APIs RESTful" />
        <meta name="keywords" content="desenvolvedor, full stack, javascript, react, node.js, portfolio" />
        <meta name="author" content="Leonardo Oliveira" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
      </Head>

      <div className={styles.container}>
        <Header />
        
        <main className={styles.main}>
          <Objetivo />
          <Escolaridade />
          <Cursos />
          <Habilidades />
          <Experiencias />
        </main>

        <Footer />
      </div>
    </>
  )
}
