import React from 'react';
import ReactDropdown from 'react-dropdown';
import styles from './OverdueRow.module.css';

const options = ["15 days"]

export default (props)=>{
    return<div>
        <ReactDropdown className={styles.DropDown} options={options}  value={options[0]} placeholder="Select an option"/>
        <div className={styles.OverdueGrid}>
            <Block Label="Not Overdue" Value="Rs 10,832"/>
            <Block Label="1 - 15 days" Value="Rs 1,50,832"/>
            <Block Label="16 - 30 days" Value="Rs 2,10,832"/>
            <Block Label="31 - 45 days" Value="Rs 5,10,832"/>
            <Block Label="> 45 days" Value="Rs 2,10,832"/>

        </div>

    </div>
}


const Block = (props)=>(
    <div className={styles.Block}>
        <div className={styles.Label}>{props.Label}</div>
        <div className={styles.Value}>{props.Value}</div>
    </div>
)