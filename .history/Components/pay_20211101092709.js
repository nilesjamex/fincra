import React, {useState, useContext} from 'react'
import { StepContext } from './../Contexts/StepContext';

const Pay = () => {

   const {steps, front, back} = useContext(StepContext)

    switch (steps) {
        case 1:
            return (
        <div>
        <div className={styles.paymentText}>
        <h4 className={styles.paymentTextMain}>One-time Payment</h4>
        <p className={styles.paymentTextSub}>Send money internationally</p>        
        </div>

        <form action=""> 
        <input type="text" name="" id="" />
        <input type="text" name="" id="" readOnly />
        </form>
        <button onClick={(e) => front()}> hello </button>
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

