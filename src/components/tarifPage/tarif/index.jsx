import { React, useState } from 'react';
import styles from './index.module.css';




const Tariff = ({ tariff }) => {
    const { tariffname, cost, speed, conditions } = tariff;
    const [selected, setSelected] = useState(false);

    const handleChange = () => {
        setSelected(!selected);
    };
    return (
        <div onClick={handleChange} className={
            selected
                ? (styles.tariff_selected)
                : (styles.tariff)}>

            <div className={styles.tariff_header}>
                <div className={styles.tariffname}><h2>{tariffname}</h2></div>
            </div>

            <div className={styles.tariff_text_cost}><p>руб</p>{cost} <p> /мес</p></div>
            <div className={styles.tariff_text_speed}><p>до {speed} Мбит/сек</p></div>
            <div className={styles.tariff_text_conditions}><p>{conditions}</p></div>
        </div>

    )
}

export default Tariff;