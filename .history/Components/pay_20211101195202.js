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

                const submit2 = (e) => {
                    e.preventDefault();
                    front();
                }
                // api for exchange rates
                const [info, setInfo] = useState([]);
                const [from, setFrom] = useState("usd");
                const [to, setTo] = useState("ngn");
                const [options, setOptions] = useState([]);
                const [showRates, setShowRates] = useState(false)
                
        
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
                    const rate = info[to];
                    setFee(10/100 * send);
                    setSendRate((send-fee))
                    setReceive((send-fee) * rate);
                    setEnable(false);
                    setShowRates(true);
                    
                }

        // transfer fee
        const [fee, setFee] =useState("");
        const [sendRate, setSendRate] = useState("")



                switch (steps) {
                    case 1:
                        return (
                            <div className={styles.move}>
                            
                    <div className={styles.container}>
                    <div className={styles.paymentText}>
                    <h2 className={styles.paymentTextMain}>One-time Payment</h2>
                    <p className={styles.paymentTextSub}>Send money internationally</p>        
                    </div>

                    <form className={styles.form}  onSubmit={step2}> 
                    <div style={{display: "flex", height: "2.5rem", marginBottom: "0.6rem"}}>
                    <input className={styles.paymentinfo} 
                    type="text" 
                    name="send"
                    value={send}
                    onChange={onChange}
                    required /> <Dropdown style={{height: "3.5rem"}} options={options} 
                        onChange={(e) => { setFrom(e.value) }}
            value={from} placeholder="From" />
            </div>

           {
               showRates && <div className={styles.rateShow}>
            <div className={styles.rateInfo}>
            <h5>{fee} {from}</h5>
            <p>Transfer fee</p>
            </div>
            <div className={styles.rateInfo}>
            <h5>{sendRate} {from}</h5>
            <p>Amount we???ll convert</p>
            </div>
            <div className={styles.rateInfo}>
            <h5 style={{color: "#372271"}}>{info[to]} {to}</h5>
            <p style={{color: "#372271"}}>Guaranteed rate (1hr)</p>
            </div>
            </div>
           } 

                    <input className={styles.paymentinfo} type="text" 
                    name="receive"
                    value={receive}
                    onChange={onChange}
                    readOnly />
                    <Dropdown options={options} 
                        onChange={(e) => { setTo(e.value) }}
            value={to} placeholder="to" />
                    <button type="submit" className={styles.compare} onClick={compare}> Compare Rates</button>
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

                    <form className={styles.form} onSubmit={submit2}>
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
                    <h2 className={styles.paymentTextMain}>Bank Details</h2>        
                    </div>
                    <div style={{display: "flex"}}>
                    <h6 onClick={(e) => setIban(false)} style={{cursor: "pointer", margin: "0.6rem", 
                    color: `${iban ? "#8B8F96" : "#4305EB"}`}}>Inside Europe</h6>
                    <h6 onClick={(e) => setIban(true)} style={{cursor: "pointer", margin: "0.6rem", 
                    color: `${iban ? "#4305EB" : "#8B8F96"}`}}>Outside Europe</h6>
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
                    <button type="submit" className={styles.continue2}> Continue </button>
                    </form>
                    </div>
                    </div>
                );
                case 3:
                        return (
                    <div className={styles.move}>
                            
                    <div className={styles.container}>
                    <div className={styles.paymentText}>
                    <h2 className={styles.paymentTextMain}>Review details of your transfer</h2>   
                    <hr width="96%" />     
                    </div>
                    
                    <div className={styles.rateShow}>
            <div className={styles.rateInfo}>
            <p>You Send</p>
            <h5>{send} {from}</h5>
            </div>
            <div className={styles.rateInfo}>
            <p>Total fees (included)</p>
            <h5>{fee} {from}</h5>
            </div>
            <div className={styles.rateInfo}>
            <p>Amount we???ll convert</p>
            <h5>{sendRate} {from}</h5>
            </div>
            <div className={styles.rateInfo}>
            <p>Guaranteed rate (1hr)</p>
            <h5>{info[to]} {to}</h5>
            </div>
             <div className={styles.rateInfo}>
            <p>{name} gets</p>
            <h5>{receive} {to}</h5>
            </div>
             <div className={styles.rateInfo}>
            <p>Guaranteed rate (1hr)</p>
            <h5>{info[to]} {to}</h5>
            </div>
            <hr width="96%" style={{margin: "1.2rem 0 1.2rem 0.6rem"}} />
            </div>

             <div className={styles.rateShow}>
            <div className={styles.rateInfo}>
            <p>Name</p>
            <h5>{name}</h5>
            </div>
            <div className={styles.rateInfo}>
            <p>Email Address</p>
            <h5>{email}</h5>
            </div>
            <div className={styles.rateInfo}>
            <p>IBAN / Account number</p>
            <h5>{ibanno || swift}</h5>
            </div>
            </div>
             <button className={styles.continue3} disabled> Confirm and Continue </button>
                   
                    </div>
                    </div>
                );
                }
                
            }

            export default Pay;

