import styles from './header.module.css'
import React from 'react'

function Header({title}){
return <div className={styles.header}>
  <img data-testid="logo" src='/lieferando.png' alt="Lieferando logo" width="150" height="30" />
</div>
}

export default Header