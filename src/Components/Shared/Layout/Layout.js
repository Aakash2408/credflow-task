
import React, { useState } from 'react';
import styles from './Layout.module.css';
import SideNav from './SideNav';
import Topbar from './Topbar';

const Layout = (props)=>{
    const [docked, setDocked] = useState(false);
    const [navOpen, setNavOpen] = useState(true);
    return(
    <div className={styles.Layout}>
        <SideNav open={navOpen} docked={docked}/>
        <div className={styles.Main}>
            <Topbar/>
            <div className={styles.MainContent}>
                {props.children}
            </div>
        </div>
    </div>)
}

export default Layout;