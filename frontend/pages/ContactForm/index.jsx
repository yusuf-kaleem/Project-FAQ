
import Layout from '../../components/layout';
import styles from './contact.module.css'
import React,{useEffect,useState} from 'react'

export default function App() {


    //INITIAL STATES
    const [order,setOrder] = useState("")
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const [captcha,setCaptcha] = useState("")

    //INITIAL LOAD
    useEffect(()=>{
        //alert("ss")
    },[])

    //SUBMIT
    const submit = ()=>{
        
        if(order && name && phone && email && message ){
            alert("We have recieved your request respected person will caontact you for your query within 48 hours")
        }
        else{
            alert("please fill all the details")
        }

    }

    return (
        <Layout>
        <div data-testid="form-container" className={styles.column}>

        <div className={styles.row}>
            <span className={styles.label}>Order </span>
            <input onChange={(e)=>{setOrder(e.target.value)}} className={styles.input}></input>
        </div>

        <div className={styles.row}>
            <span className={styles.label}>Name </span>
            <input onChange={(e)=>{setName(e.target.value)}} className={styles.input}></input>
        </div>

        <div className={styles.row}>
            <span className={styles.label}>Phone </span>
            <input onChange={(e)=>{setPhone(e.target.value)}} type="number" className={styles.input}></input>
        </div>

        <div className={styles.row}>
            <span className={styles.label}>Email </span>
            <input onChange={(e)=>{setEmail(e.target.value)}} className={styles.input}></input>
        </div>

        <div className={styles.row}>
            <span className={styles.label}>Message </span>
            <input onChange={(e)=>{setMessage(e.target.value)}} className={styles.msg_input}></input>
        </div>

        <div className={styles.row}>
            <span className={styles.label}> </span>

            <div className={styles.captcha_container}> 
            <div className={styles.captcha}>
                CapTchA
                <input onChange={(e)=>{setCaptcha(e.target.value)}}></input>
            </div>

            </div>
            <button data-testid="submit" onClick={submit} className={styles.button}>Submit</button>

        </div>
        </div>

       
        
        </Layout>
   
    );
  };
  