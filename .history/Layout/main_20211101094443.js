import React from 'react'
import Header from './header.js'

const Main = (props) => {
    return (
        <div>
          <Header />
          <div>
          {props.children className={styles.container}}
          </div>
        </div>
    )
}

export default Main;
