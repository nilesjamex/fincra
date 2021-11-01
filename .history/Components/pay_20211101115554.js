import React, {useState, useContext} from 'react'
import { StepContext } from './../Contexts/StepContext';
import styles from './pay.module.css'
const Pay = () => {
    // state to control button disabling
    const [enable, setEnable] = useState(true)

    // context to move through stages
   const {steps, front, back} = useContext(StepContext)


     // onclick functions
     const compare = (e) => {
         e.preventDefault();
         setEnable(false)
     }



    switch (steps) {
        case 1:
            return (
                <div className={styles.move}>
                
        <div className={styles.container}>
        <div className={styles.paymentText}>
        <h2 className={styles.paymentTextMain}>One-time Payment</h2>
        <p className={styles.paymentTextSub}>Send money internationally</p>        
        </div>

        <form action="" onSubmit={(e) => front()}> 
        <input className={styles.paymentinfo} type="text" name="" id="" />
        <input className={styles.paymentinfo} type="text" name="" id="" readOnly />
         <button className={styles.compare} onClick={compare}> Compare Rates</button>
          <button className={styles.continue} disabled={enable}> Continue </button>
        </form>
        </div>
        </div>
    );
     case 2:
            return (
         <div className={styles.move}>
                
        <div className={styles.container}>
        <div className={styles.paymentText}>
        <h2 className={styles.paymentTextMain}>One-time Payment</h2>
        <p className={styles.paymentTextSub}>Send money internationally</p>        
        </div>

        <form action="submit"> 
        <input className={styles.paymentinfo} type="text" name="" id="" />
        <input className={styles.paymentinfo} type="text" name="" id="" readOnly />
         <button className={styles.compare} onClick={compare}> Compare Rates</button>
          <button className={styles.continue} onClick={(e) => front()} disabled={enable}> Continue </button>
        </form>
        </div>
        </div>
    );
     case 3:
            return (
        <div>

        </div>
    );
     case 4:
            return (
        <div>

        </div>
    );
    }
    
}

export default Pay;

