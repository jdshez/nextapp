import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (<>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>    
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nemo aspernatur est animi saepe repellat aliquam dignissimos perspiciatis error modi! Maxime reprehenderit ex qui eaque quos nam illo, quod culpa.</p>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dicta ullam possimus placeat, quis sint. Fugit at, eum ipsam ad, ab similique velit quam facilis, atque itaque repellendus mollitia veniam.</p>
        <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>  
      </div>
    </>
  )
}
