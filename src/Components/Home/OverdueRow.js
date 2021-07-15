import React from 'react';
import ReactDropdown from 'react-dropdown';
import styles from './OverdueRow.module.css';

const options = ["15 days"]



const OverdueRow = (props)=>{
    return<div>
        <ReactDropdown className={styles.DropDown} options={options}  value={options[0]} placeholder="Select an option"/>
        <div className={styles.OverdueGrid}>
            <Block Label="Not Overdue" Value={`₹${props.data['not-overdue']}`}/>
            <Block Label="1 - 15 days" Value={`₹${props.data['1-15']}`}/>
            <Block Label="16 - 30 days" Value={`₹${props.data['16-30']}`}/>
            <Block Label="31 - 45 days" Value={`₹${props.data['31-45']}`}/>
            <Block Label="> 45 days" Value={`₹${props.data['>45']}`}/>
        </div>

    </div>
}

export default OverdueRow;
const Block = (props)=>(
    <div className={styles.Block}>
        <div className={styles.Label}>{props.Label}</div>
        <div className={styles.Value}>{props.Value}</div>
    </div>
)