import React from 'react';
import Flashcard from '../сard';
import styles from './index.module.css';
import Button from '@mui/material/Button';


const CardWrapper = ({ position, onShowPrevious, onShowNext, data, number, dataLength }) => {


    return (
        <div className={styles.cardWrapper}>
            <div className={styles.aroundCard}>
                <Button className={styles.countBtn} variant="outlined" onClick={onShowNext}>left</Button>
                <Flashcard
                    english={data[position].english}
                    transcription={data[position].transcription}
                    russian={data[position].russian}
                />
                <Button className={styles.countBtn} variant="outlined" onClick={onShowNext}>right</Button>
            </div>
            <p>{number} / {dataLength}</p>
        </div>
    )
}
export default CardWrapper; /* используется в  slider */