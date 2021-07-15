import React from 'react';
import styles from './SideNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faChartBar, faCreditCard} from '@fortawesome/free-regular-svg-icons';
import { faIgloo} from '@fortawesome/free-solid-svg-icons';



const SideNav = (props)=>{
    return(
    <nav className={[styles.Nav, props.docked?styles.Docked: styles.Undocked].join(" ")}>
        <LogoHeader  icon={faIgloo} label="Company Name"/>
        <ul className={styles.NavContent}>
            <NavItem  icon={faNewspaper} label="Newspaper"/>
            <NavItem  icon={faChartBar} label="Control"/>
            <NavItem  icon={faCreditCard} label="Shopping"/>
        </ul>
    </nav>)
}

export default SideNav;



const NavItem = (props)=>{
    return(
    <li className={styles.NavItem}>
        <span className={styles.Icon}>
            <FontAwesomeIcon icon={props.icon}/>
        </span>
        <div className={styles.Label}> {props.label} </div>
    </li>)
}

const LogoHeader = (props)=>{
    return(
        <li className={styles.LogoHeader}>
            <span className={styles.Icon}>
                <FontAwesomeIcon icon={props.icon}/>
            </span>
            <div className={styles.Label}> {props.label} </div>
        </li>)
}