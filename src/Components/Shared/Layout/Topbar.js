import { faPlay} from '@fortawesome/free-solid-svg-icons';
import { faUser, faListAlt, faHandScissors, faPaperPlane} from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React  from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styles from './Topbar.module.css';



const Topbar = (props)=>{
    return <div className={styles.Topbar}>
        <div className={styles.LeftSide}>
            <button className={styles.DockNavBtn} onClick ={()=> props.setDocked(!props.docked)}>
                <FontAwesomeIcon icon={faPlay}/>
            </button>
            <Dropdown className={styles.Dropdown} onChange={(e)=>props.setSelected(e.value)} options={props.keys}  value={props.selected} placeholder="Select an option" />
            <button className={styles.SetBtn}>Set company details</button>
        </div>
        <div className={styles.IconTray}>
            <span><FontAwesomeIcon icon={faListAlt}/></span>
            <span><FontAwesomeIcon icon={faHandScissors}/></span>
            <span><FontAwesomeIcon icon={faPaperPlane}/></span>
            <span><FontAwesomeIcon icon={faUser}/></span>

        </div>
    </div>
}

export default Topbar;