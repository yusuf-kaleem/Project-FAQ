import {

    mainContent,
    layoutBody,
 
} from './layout.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import React from 'react'

export default function Layout (props) {
return (
<div className={layoutBody}>
 
 <Header></Header>
 

    <div className={mainContent}>
    {props.children}
    </div>
 
 <Footer title="Takeaway.com"></Footer>
</div>
);
}
