import React, {useState} from 'react'
import styles from './header.module.css'
import Image from 'next/image'

const Header = () => {
    const [value, setValue] = useState(0)

    const dragHandler = (e) => {
        setvalue(e.target.value)
    }
    return (
        <nav className={styles.navbar}>
        <div className={styles.fincra}>
        <h3>
        <Image src="/../public/Images/logo.png" alt="logo" height="30px" width="20px" />
        <Image src="/../public/Images/p.svg" alt="logo" height="17.77px" width="12.47px" />
        <Image src="/../public/Images/a.svg" alt="logo" height="17.77px" width="10.26px"/>
        <Image src="/../public/Images/y.svg" alt="logo" height="17.77px" width="12.91px" /></h3>
        </div>
        <div className={styles.inputrange}>
        <div style={{
        backgroundColor: `linear-gradient(to right, #4305EB 64.83%, #636166 99.42%)`,
        }} className="track">
              <input min="0"
              className={styles.input}
              max="100"
              onChange={dragHandler}
              value={value}
              type="range" />
              <div className={styles.animateTrack}></div>
              </div> 
        </div>
        <p>vv</p>
        </nav>
    )
}

export default Header;
