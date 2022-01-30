import styles from './card.module.css'
import React from 'react';
import Link from 'next/link'

function card({title,redirect}){
return <div className={styles.container}>
<Link href={redirect}>
<a> 
<p data-testid="title">{title}</p>
</a> 
</Link>
</div>
}

export default card