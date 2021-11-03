import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'

const header = () => {
    return (
        <nav className={styles.navbar}>
        <div className={styles.fincra}>
        <h3>
        <Image src="/../public/Images/logo.png" alt="logo" height="30px" width="20px" />
        <Image src="/../public/Images/p.svg" alt="logo" height="17.77px" width="12.47px" />
        <Image src="/../public/Images/a.svg" alt="logo" height="17.77px" width="10.26px"/>
        <Image src="/../public/Images/y.svg" alt="logo" height="17.77px" width="12.91px" /></h3>
        </div>
        <div style={{
        backgroundColor: `linear-gradient(to right, #4305EB 64.83%, #636166 99.42%)`,
        }} className="track">
              <input min={0}
              max="100"
            //   onChange={dragHandler}
              value={25}
              type="range" />
              <div style={trackAnime} className="animate-track"></div>
              </div>
        <div className={styles.inputrange}> 
        </div>
        </nav>
    )
}

export default header
