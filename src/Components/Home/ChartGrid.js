import React from 'react';
import styles from './ChartGrid.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import ReactDropdown from 'react-dropdown';
import { Line, Bar } from 'react-chartjs-2';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';




const ChartGrid  = (props)=>{

    const outData = {
        title: "Outstanding Amount",
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept' ,'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Outstanding Amount',
            data: props.data['outstanding amount'],
            backgroundColor: "#DAF2F477",
            borderColor: "#67B9B1",
            borderWidth: 1, 
            fill: true,
            tension: 0.4
        }],
        footer:{
            label : "Total Outstanding amount", 
            currVal : `₹${props.data['outstanding amount'][11]}`,
            percentage :  Math.round((props.data['outstanding amount'][11] - props.data['outstanding amount'][10]) * 100/props.data['outstanding amount'][10]*100)/100
        }
    }

    const periodData = {
        title: "Average Collection Period",
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept' ,'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Average Collection Period',
            data: props.data['collection period'],
            backgroundColor: "#DAF2F477",
            borderColor: "#67B9B1",
            borderWidth: 1, 
            tension: 0.4
        }],
        footer:{
            label : "Reciveable Turnover time this month", 
            currVal : `${props.data['collection period'][11]} days`,
            percentage : Math.round((props.data['collection period'][11] - props.data['collection period'][10]) * 100/props.data['collection period'][10]*100)/100
        }
    }

    const salesData = {
        title: "Sales Trend",
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept' ,'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Sales',
            data: props.data['sales'],
            backgroundColor: "#DAF2F477",
            borderColor: "#67B9B1",
            borderWidth: 1, 
            tension: 0.4
        }],
        footer:{
            label : "This month's sales", 
            currVal : `₹${props.data['sales'][11]}`,
            percentage :  Math.round((props.data['sales'][11] - props.data['sales'][10]) * 100/props.data['sales'][10]*100)/100
        }
    }

    const collectionData = {
        title: "Collection",
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept' ,'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Collection',
            data: props.data['collection'],
            backgroundColor: "#DAF2F477",
            borderColor: "#67B9B1",
            borderWidth: 1, 
            tension: 0.4
        }],
        footer:{
            label : "Recovery this month", 
            currVal : `₹${props.data['collection'][10]}`,
            percentage :  Math.round((props.data['collection'][11] - props.data['collection'][10]) * 100/props.data['collection'][10]*100)/100
        }
    }


    return(
    <div className={styles.ChartGrid}>
        <ChartBlock type="line" data={outData} date/>
        <ChartBlock type="line" data={periodData}/>
        <ChartBlock type="line" data={salesData}/>
        <ChartBlock type="bar" data={collectionData}/>
    </div>
    )
}

export default ChartGrid;


const ChartBlock = (props)=> {

    let Graph = props.type === "line" ? Line : Bar;
    let Percentage = props.data.footer.percentage;
    return(
    <div className={styles.ChartBlock}>
        <div className={styles.ChartHeader}>
            <div className={styles.ChartTitle}> 
                <span>
                    {props.data.title}
                </span>
                <span>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                </span>
            </div>
            <ReactDropdown className={styles.Dropdown} options={["Last 12 months"]} value={"Last 12 months"}/>
        </div>
        <div className={styles.Chart}>
            <Graph
                data={props.data}
                options={{ responsive:true, startWithZero: true}}
                type={props.type}
            />
        </div>
        <div className={styles.ChartFooter}>
            <div className={styles.Left}>
                <div className={styles.Label}>This month's amount</div>
                <div className={styles.Value}>
                    {props.data.footer.currVal}
                { Percentage && <span className={[styles.Percentage, Percentage > 0 ?styles.Green : styles.Red ].join(" ")}>
                    <span><FontAwesomeIcon icon={Percentage > 0 ?faSortUp : faSortDown }/></span><span>{Percentage}%</span></span>}
                </div>
            </div>
            {props.date &&
            <div className={styles.Right}>
                <div className={styles.Label}>
                    Date
                </div>
                <div className={styles.Label}>
                    11/12/2000
                </div>
            </div>
            }
        </div>
    </div>
)
        }