import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SiteLayout from '../components/SiteLayout'

const About = () => (
  
    <div>
      <Head>
        <title>About Me App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="content-wrapper">
        <h1 className={styles.title}>
          About Us
        </h1>

        <p className={styles.description}>
          About Bitss..
        </p>
      </div>
    </div>
  
)


About.layout = SiteLayout

export default About

