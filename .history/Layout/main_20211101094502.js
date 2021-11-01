import React from 'react'
import Header from './header.js'

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
