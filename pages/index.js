import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DataItem from '../components/DataItem'
import DataDisplay from '../components/DataDisplay'

export default function Home() {
  return (
    <div className={styles.main}>
      <DataDisplay/>
    </div>
  )
}
