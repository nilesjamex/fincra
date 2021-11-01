import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'

const header = () => {
    return (
        <nav className={styles.navbar}>
        <div className={styles.fincra}>
        <h3><Image src="/../public/Images/logo.png" alt="logo" height="20px" width="20px" />Pay</h3>
        </div>
        </nav>
    )
}

export default header
