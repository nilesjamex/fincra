import React from 'react'
import Header from './header.js'

const main = (props) => {
    return (
        <div>
          <Header />
          {props.children}
        </div>
    )
}

export default main
