import React from 'react'
import Header from './header.js'
import styles from './main.module.css'

const Main = (props) => {
    return (
        <div>
          <Header />
          <div className={styles.container}>
          {props.children}
          </div>
        </div>
    )
}

export default Main;
