import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bulma/css/bulma.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ether Lottery</title>
        <meta name="description" content="ethereum lottery dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <h1> Ether Lottery </h1>
            </div>
            <div className="navbar-end">
              <button className="button is-link">Connect Wallet</button>
            </div>
          </div>
        </nav>
        <div className="container">
          <section className="mt-5">
            <div className="column is-two-thirds">
              <p>Lottery Buttons</p>
            </div>
            <div className="column is-one-third">
              <p>Lottery Info</p>
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2022 Leone Enterprises</p>
      </footer>
    </div>
  )
}

