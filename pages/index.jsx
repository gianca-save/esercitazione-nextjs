import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href='articles/2021/title1'>
          <a>Esercizio 1</a>
        </Link>

        <Link href='articles2/2021/title1'>
          <a>Esercizio 2.1</a>
        </Link>

        <Link href='articles2'>
          <a>Esercizio 2.2</a>
        </Link>
      </main>

    </div>
  )
}
