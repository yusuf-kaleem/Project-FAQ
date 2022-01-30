import styles from './search_bar.module.css'
import React from 'react'

function search_bar({placeholder,keyword,setKeyword}){
return <div >

<input 
data-testid="search-input"
className={styles.container} 
placeholder={placeholder}
value={keyword}
onChange={(e) => setKeyword(e.target.value)}
></input>

</div>
}

export default search_bar