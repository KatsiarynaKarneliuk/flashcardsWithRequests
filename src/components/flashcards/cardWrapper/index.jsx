import React from 'react';
import Flashcard from '../сard';
import styles from './index.module.css';
import Button from '@mui/material/Button';


const CardWrapper = ({ position, onShowPrevious, onShowNext, context, number, dataLength }) => {


    return (
        <div className={styles.cardWrapper}>
            <div className={styles.aroundCard}>
                <Button className={styles.countBtn} variant="outlined" onClick={onShowPrevious}>left</Button>
                <Flashcard
                    english={context[position].english}
                    transcription={context[position].transcription}
                    russian={context[position].russian}
                />
                <Button className={styles.countBtn} variant="outlined" onClick={onShowNext}>right</Button>
            </div>
            <p>{number} / {dataLength}</p>
        </div>
    )
}
export default CardWrapper; /* используется в  slider */