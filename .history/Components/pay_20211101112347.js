import React, {useState, useContext} from 'react'
import { StepContext } from './../Contexts/StepContext';
import styles from './pay.module.css'
const Pay = () => {

   const {steps, front, back} = useContext(StepContext)

    switch (steps) {
        case 1:
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
         <button className={styles.compare} onClick={(e) => front()}> Compare Rates</button>
          <button className={styles.continue} onClick={(e) => front()} disabled> Continue </button>
        </form>
        </div>
        </div>
    );
     case 2:
            return (
        <div>
        <button onClick={(e) => back()}> he </button>
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

