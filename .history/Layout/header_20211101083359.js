import React from 'react'
import styles from './header.module.css'

const header = () => {
    return (
        <div>
        <nav className={styles.navbar}>
        <div className={styles.fincra}>
        <h3>FINCRA</h3>
        </div>
        </nav>
        </div>
    )
}

export default header
