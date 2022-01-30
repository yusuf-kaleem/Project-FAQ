import styles from './help_center.module.css'
import Card from '../card/card'
import Search_bar from '../search_bar/search_bar'
import React from 'react'

function help_center(){
return <div className={styles.container}>

<h3 data-testid="title" className={styles.title}>Help Center</h3>

<Search_bar  input={null} setKeyword={()=>{}}  placeholder="Search"></Search_bar>

<div className={styles.card_container}>
    
<Card title="Contact Forms" redirect="/ContactForm"></Card>

<Card title="Where is my order ?" redirect="/OrderDetails"></Card>

</div>

</div>
}

export default help_center