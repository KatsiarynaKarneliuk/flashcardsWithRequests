import React from 'react';
import styles from './index.module.css';
/* import tariffs from './data.js'; */
import Tariff from '../tarif';

const tariffs =
    [{
        id: 1,
        tariffname: "Безлимитный 300",
        cost: 300,
        speed: 10,
        conditions: "Объем включенного трафика не ограничен"
    },
    {
        id: 2,
        tariffname: "Безлимитный 450",
        cost: 450,
        speed: 50,
        conditions: "Объем включенного трафика не ограничен"
    },
    {
        id: 3,
        tariffname: "Безлимитный 550",
        cost: 550,
        speed: 100,
        conditions: "Объем включенного трафика не ограничен"
    },
    {
        id: 4,
        tariffname: "Безлимитный 1000",
        cost: 1000,
        speed: 200,
        conditions: "Объем включенного трафика не ограничен"
    }
    ]
function Tariffs() {
    return (
        <div className={styles.container}>
            {
                tariffs.map(tariff => <Tariff key={tariff.id} tariff={tariff} />)
            }
        </div>
    );
}

export default Tariffs;