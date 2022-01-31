import styles from './order_detail.module.css'
import React from 'react';
import Link from 'next/link'

function order_detail({order}){
return  <div className={styles.column}>

{order.length?<div data-testid="data-container" >
<div className={styles.row}>
    <span className={styles.label}>Reference :</span>
    <span className={styles.value}>{order[0].reference} </span>
</div>

<div className={styles.row}>
    <span className={styles.label}>Delivered :</span>
    <span className={styles.value}>{order[0].delivered?.toString()} </span>
</div>


<div className={styles.row}>
    <span className={styles.label}>Cost :</span>
    <span className={styles.value}>{order[0].cost} </span>
</div>

<div className={styles.row}>
    <span className={styles.label}>Date :</span>
    <span className={styles.value}>{order[0].date} </span>
</div>

</div>:<div data-testid="no-data-container" className={styles.row}>
    <span className={styles.label}>No data found</span>
    
</div>}

</div>

}

export default order_detail