import styles from './breadcrumbs.module.css'
import { useRouter } from 'next/router'
import React,{useEffect} from 'react'
import { postPageView } from '../../api_services/api_services'

function breadcrumbs({url}){
 
const router = useRouter()
let path = "FAQ " + router.route.replace("/"," > ")

useEffect(()=>{
    postPageView(router.pathname)
},[])

return <div className={styles.header}>
 <p>{path}</p>
</div>
}

export default breadcrumbs