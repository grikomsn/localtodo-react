import React from 'react'

import styles from './App.module.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import Todos from './components/Todos'

export default function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Todos />
      <Footer />
    </div>
  )
}
