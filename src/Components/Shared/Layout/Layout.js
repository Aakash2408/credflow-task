
import React, { useEffect, useRef, useState } from 'react';
import styles from './Layout.module.css';
import SideNav from './SideNav';
import Topbar from './Topbar';

const Layout = (props)=>{
    const layoutRef= useRef();
    const [docked, setDocked] = useState(false);
    useEffect(()=>{

        let listner = layoutRef.current.addEventListener('click', ()=>{
            if(docked=== true && window.innerWidth < 786)
            setDocked(false);
        })
        return()=>{
            layoutRef.current.removeEventListener('click', listner)
        }
    })
    return(
    <div ref={layoutRef} className={[styles.Layout, docked? styles.NavDocked: null ].join(" ")}>
        <SideNav docked={docked}/>
        <div className={styles.Main}>
            <Topbar {...props} docked={docked} setDocked={setDocked}/>
            <div className={styles.MainContent}>
                {props.children}
            </div>
        </div>
    </div>)
}

export default Layout;