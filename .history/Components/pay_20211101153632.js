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

        const step2 = (e) => {
            e.preventDefault();
            front();
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

            <form  onSubmit={step2}> 
            <input className={styles.paymentinfo} type="text" name="" id="" />
            <input className={styles.paymentinfo} type="text" name="" id="" readOnly />
            <button className={styles.compare} onClick={compare}> Compare Rates</button>
            <button type="submit" className={styles.continue} disabled={enable}> Continue </button>
            </form>
            </div>
            </div>
        );
        case 2:
                return (
            <div className={styles.move}>
                    
            <div className={styles.container}>
            <div className={styles.paymentText}>
            <h2 className={styles.paymentTextMain}>Your Recipient</h2>
            <p className={styles.paymentTextSub}>Who are you sending money to?</p>        
            </div>

            <form action="submit">
            <div>
            <div className={styles.payinfo}>
            <label> Their email (optional)</label> 
            <input className={styles.paymentinfo} type="text" name="" id="" />
            </div>
            <div className={styles.payinfo}>
            <label> Full name of the account holder</label> 
            <input className={styles.paymentinfo} type="text" name="" id="" />
            </div>
            </div>

            <div>
            <div className={styles.paymentText}>
            <h2 className={styles.paymentTextMain}>bank details</h2>        
            </div>
            <div>
            <h3 style={{cursor: "pointer"}}>Inside Europe</h3>
            <h3>Outside Europe</h3>
            </div>
            <div>
            <div className={styles.payinfo}>
            <label> IBAN</label> 
            <input className={styles.paymentinfo} type="text" name="" id="" />
            </div>
            </div>

            <div>
            <div className={styles.payinfo}>
            <label> SWIFT / BIC code</label> 
            <input className={styles.paymentinfo} type="text" name="" id="" />
            </div>
            <div className={styles.payinfo}>
            <label> IBAN / Account Number</label> 
            <input className={styles.paymentinfo} type="text" name="" id="" />
            </div>
            </div>
            </div>
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

