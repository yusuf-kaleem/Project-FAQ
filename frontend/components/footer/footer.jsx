import styles from './footer.module.css'
import React from 'react'

function footer({title}){
return <div className={styles.container}>
<p data-testid="title">{title}</p>
</div>
}

export default footer