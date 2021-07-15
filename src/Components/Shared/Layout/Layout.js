
import React, { useState } from 'react';
import styles from './Layout.module.css';
import SideNav from './SideNav';
import Topbar from './Topbar';

const Layout = (props)=>{
    const [docked, setDocked] = useState(false);
    return(
    <div className={[styles.Layout, docked? styles.NavDocked: null ].join(" ")}>
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