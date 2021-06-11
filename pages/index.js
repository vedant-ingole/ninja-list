import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <Head>
      <title> Ninjas List | Home </title>
    </Head>
    <div >
      <h1 className={styles.title} >Home Page</h1>
      <p className={styles.text} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet distinctio accusantium, repudiandae natus alias nihil at numquam eos veritatis amet. Recusandae deleniti sed odit commodi incidunt dignissimos alias dolorem accusantium?</p>
      <p className={styles.text} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet distinctio accusantium, repudiandae natus alias nihil at numquam eos veritatis amet. Recusandae deleniti sed odit commodi incidunt dignissimos alias dolorem accusantium?</p>
      <Link href="/ninjas" >
        <a className={styles.btn} >See Ninja Listing</a> 
        </Link>
    </div>
    </>
  )
}
