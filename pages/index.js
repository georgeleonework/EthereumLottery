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
        <nav className="navbar mt-4 mb-4">
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
            <div className="columns">
              <div className="column is-two-thirds">
                <section className="mt-5">
                  <p>Enter the Lottery by sending 0.01 Ether</p>
                  <button className="button is-link is-large is-light mt-3">Play Now</button>
                </section>
                <section className="mt-6">
                  <p><b>Admin only:</b> Pick winner</p>
                  <button className="button is-primary is-large is-light mt-3">Pick Winner</button>
                </section>
              </div>
              <div className="column is-one-third">
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Lottery History</h2>
                        <div className="history-entry">
                          <div>Lottery # 1 winner:</div>
                          <div>
                            <a href="https://etherscan.io/address/0x0C777da66B91d2d9E43487D1Bb0C03Be67B83D9b" target="blank">0x0C777da66B91d2d9E43487D1Bb0C03Be67B83D9b</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Lottery History</h2>
                        <div className="history-entry">
                          <div>Lottery # 1 winner:</div>
                          <div>
                            <a href="https://etherscan.io/address/0x0C777da66B91d2d9E43487D1Bb0C03Be67B83D9b" target="blank">0x0C777da66B91d2d9E43487D1Bb0C03Be67B83D9b</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Lottery History</h2>
                        <div className="history-entry">
                          <div>Lottery # 1 winner:</div>
                          <div>
                            <a href="https://etherscan.io/address/0x0C777da66B91d2d9E43487D1Bb0C03Be67B83D9b" target="blank">0x0C777da66B91d2d9E43487D1Bb0C03Be67B83D9b</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
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

