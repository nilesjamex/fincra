            import React, {useState, useEffect, useContext} from 'react'
            import { StepContext } from './../Contexts/StepContext';
            import Axios from 'axios';
            import Dropdown from 'react-dropdown';
            import 'react-dropdown/style.css';
            import styles from './pay.module.css'
            const Pay = () => {
                // state to control button disabling
                const [enable, setEnable] = useState(true)
                // state to control iban visibility
                const [iban, setIban] = useState(false)
                // state to show rate
                const [receive, setReceive] = useState("")
                // state to store all data
                const [payData, setPayData] = useState({
                    send: "",
                    email: "",
                    name: "",
                    ibanno: "",
                    swift: "",
                    account: ""
                })
                const { send, email, name, ibanno, swift, account } = payData;

                const onChange = (e) => {
                    e.preventDefault();
                    setPayData({...payData, [e.target.name]: e.target.value})
                }

                // context to move through stages
            const {steps, front, back} = useContext(StepContext)


                // onclick functions
            

                const step2 = (e) => {
                    e.preventDefault();
                    front();
                }

                // api for exchange rates
                const [info, setInfo] = useState([]);
                const [from, setFrom] = useState("usd");
                const [to, setTo] = useState("ngn");
                const [options, setOptions] = useState([]);
                
        
        // Calling the api whenever the dependency changes
        useEffect(() => {
            Axios.get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
        .then((res) => {
            setInfo(res.data[from]);
            })
        }, [from]);
        
        // Calling the convert function whenever
        // a user switches the currency
        useEffect(() => {
            setOptions(Object.keys(info));
        }, [info])
            
        // Function to convert the currency
        const compare = (e) => {
                    e.preventDefault();
                    setEnable(false)
                    var rate = info[to];
                    setReceive(send * rate);
                    setFee(10/100 * send)
                }

        // transfer fee
        const [fee, setFee] =useState("");



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
                    <input className={styles.paymentinfo} 
                    type="text" 
                    name="send"
                    value={send}
                    onChange={onChange}
                    required /> <Dropdown options={options} 
                        onChange={(e) => { setFrom(e.value) }}
            value={from} placeholder="From" />

            <div>
            <div>
            <h5>{fee}</h5>
            </div>
            <div></div>
            <div></div>
            </div>

                    <input className={styles.paymentinfo} type="text" 
                    name="receive"
                    value={receive}
                    onChange={onChange}
                    readOnly />
                    <Dropdown options={options} 
                        onChange={(e) => { setTo(e.value) }}
            value={to} placeholder="to" />
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
                    <input className={styles.paymentinfo} type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    />
                    </div>
                    <div className={styles.payinfo}>
                    <label> Full name of the account holder</label> 
                    <input className={styles.paymentinfo} type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    required/>
                    </div>
                    </div>

                    <div>
                    <div className={styles.paymentText}>
                    <h2 className={styles.paymentTextMain}>bank details</h2>        
                    </div>
                    <div>
                    <h6 onClick={(e) => setIban(false)} style={{cursor: "arrow"}}>Inside Europe</h6>
                    <h6 onClick={(e) => setIban(true)} style={{cursor: "pointer"}}>Outside Europe</h6>
                    </div>
                {
                    !iban && <div>
                    <div className={styles.payinfo}>
                    <label> IBAN</label> 
                    <input className={styles.paymentinfo} type="text"
                    name="ibanno"
                    value={ibanno}
                    onChange={onChange}
                    required/>
                    </div>
                    </div>
                }
                {
                    iban && <div>
                    <div className={styles.payinfo}>
                    <label> SWIFT / BIC code</label> 
                    <input className={styles.paymentinfo} 
                    type="text"
                    name="swift"
                    value={swift}
                    onChange={onChange}
                    required/>
                    </div>
                    <div className={styles.payinfo}>
                    <label> IBAN / Account Number</label> 
                    <input className={styles.paymentinfo} 
                    type="text"
                    name="account"
                    value={account}
                    onChange={onChange}
                    required/>
                    </div>
                    </div>
                
                }
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

