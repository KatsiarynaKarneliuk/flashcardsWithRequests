import React, { useState } from 'react';
import CardWrapper from '../flashcards/cardWrapper';
import styles from './index.module.css';


const Slider = ({ data }) => {
    const [position, setPosition] = useState(0);

    const showPreviousHandler = () => {
        if (position > 0) {
            setPosition(position - 1);
        }
    };

    const showNextHandler = () => {
        if (position < data.length - 1) {
            setPosition(position + 1);
            console.log(position)
        }
        else {
            setPosition(0);
        }
    }

    return (
        <div className={styles.slider}>
            <CardWrapper
                onShowPrevious={showPreviousHandler}
                onShowNext={showNextHandler}
                number={position + 1}
                position={position}
                data={data}
                dataLength={data.length}
            />
        </div>
    )
}
export default Slider;