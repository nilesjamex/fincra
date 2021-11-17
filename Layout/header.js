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
        PayPortal</h3>
        </div>
        <div className={styles.inputrange}>
        
        </div>
        </nav>
    )
}

export default Header;
