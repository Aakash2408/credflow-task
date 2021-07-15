import React, { useRef } from 'react';
import styles from './PolygonRow.module.css';


const PolygonRow = (props)=>{
    const rowRef = useRef(null);
    const clickHandler = (i)=>{
        Array.from(rowRef.current.children).forEach(child=>{
            child.classList.remove(styles.Active);
        })

        Array.from(rowRef.current.children)[i].classList.add(styles.Active);

    }

    return <div ref={rowRef} className={styles.PolyRow}>
        <div className={styles.Polygon} onClick={()=>clickHandler(0)}>
            <div className={styles.PolygonContent}>
                <div className={styles.Label}>Overdue</div>
                <div className={styles.Value}>₹300</div>
            </div>
        </div>
        <div className={[styles.Polygon, styles.Active].join(" ")} onClick={()=>clickHandler(1)}>
            <div className={styles.PolygonContent}>
                <div className={styles.Label}>Overdue</div>
                <div className={styles.Value}>₹400</div>
            </div>
        </div>
        <div className={styles.Polygon} onClick={()=>clickHandler(2)}>
            <div className={styles.PolygonContent}>
                <div className={styles.Label}>Overdue</div>
                <div className={styles.Value}>₹500</div>
            </div>
        </div>
        <div className={styles.Polygon}onClick={()=>clickHandler(3)}>
            <div className={styles.PolygonContent}>
                    <div className={styles.Label}>Overdue</div>
                    <div className={styles.Value}>₹600</div>
                </div>
        </div>
    </div>
}

export default PolygonRow;