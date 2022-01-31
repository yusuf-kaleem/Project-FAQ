import Layout from '../../components/layout';
import Search_bar from '../../components/search_bar/search_bar'
import styles from './order.module.css'
import React,{useEffect,useState} from 'react'
import {fetchOrders } from '../../api_services/api_services'
import Order_detail from '../../components/order_details/order_detail'


export default function App() {

    const [input, setInput] = useState('');
    const [order, setOrder] = useState(null);

    useEffect(()=>{
        fetchOrders()
        .then( (data) => {
          let orders = data;
          console.log("eeee",orders)
        });
    },[])

    const updateInput = async (input) => {
        setInput(input);
     }

    const search_order = () =>{
         //alert(input)
         fetchOrders()
         .then( (data) => {
           let orders = data.filter((list)=>{
               return list.reference == input
           });
           setOrder(orders)
         });
     }

    return (
        <Layout>
         <div>
         <div className={styles.search_container}>
        <Search_bar 
        data-testid="search-bar-id"
        input={input} 
        setKeyword={updateInput} 
        placeholder="Enter order reference number here">           
        </Search_bar>

        <button  data-testid="next-btn-id" onClick={search_order} className={styles.button}>Next</button>
       </div>   
       
       {order?<Order_detail order={order}></Order_detail>:""}

       </div>   
       

        </Layout>
   
    );
  };
  