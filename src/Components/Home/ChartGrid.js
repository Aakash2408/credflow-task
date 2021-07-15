import React from 'react';
import styles from './ChartGrid.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import ReactDropdown from 'react-dropdown';
import { Line } from 'react-chartjs-2';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug', 'Sept' ,'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Outstanding Amount',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "#DAF2F477",
        borderColor: "#67B9B1",
        borderWidth: 1, 
        fill: true,
        tension: 0.4
    }]
}


export default (props)=>(
    <div className={styles.ChartGrid}>
        <ChartBlock data={data}/>
        <ChartBlock/>
        <ChartBlock/>
        <ChartBlock/>
    </div>
)

const ChartBlock = (props)=> {
    let Percentage = -10;
    return(
    <div className={styles.ChartBlock}>
        <div className={styles.ChartHeader}>
            <div className={styles.ChartTitle}> 
                <span>
                    Sales Value
                </span>
                <span>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                </span>
            </div>
            <ReactDropdown options={["1", "2", '3']}/>
        </div>
        <div className={styles.Chart}>
            <Line data={props.data}
            options={{ responsive:true }}
            />
        </div>
        <div className={styles.ChartFooter}>
            <div className={styles.Left}>
                <div className={styles.Label}>This month's amount</div>
                <div className={styles.Value}>₹40,42,200 
                { Percentage && <span className={[styles.Percentage, Percentage > 0 ?styles.Green : styles.Red ].join(" ")}>
                    <span><FontAwesomeIcon icon={Percentage > 0 ?faSortUp : faSortDown }/></span><span>{Percentage}%</span></span>}
                </div>
            </div>
            <div className={styles.Right}>
                <div className={styles.Label}>
                    Date
                </div>
                <div className={styles.Label}>
                    11/12/2000
                </div>
            </div>
        </div>
    </div>
)
        }