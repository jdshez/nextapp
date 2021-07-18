import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nemo aspernatur est animi saepe repellat aliquam dignissimos perspiciatis error modi! Maxime reprehenderit ex qui eaque quos nam illo, quod culpa.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dicta ullam possimus placeat, quis sint. Fugit at, eum ipsam ad, ab similique velit quam facilis, atque itaque repellendus mollitia veniam.</p>
      <Link href="/ninjas">See Ninja Listing</Link>
      
    </div>
  )
}
