import Navbar from '../organisms/navbar'
import Footer from '../organisms/footer'
import Head from 'next/head'
import styles from '../../../styles/Home.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>UFSecurity</title>
        <meta name="description" content="Desenvolvido por alunos de Planejamento e Gerenciamento de Projetos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}