import { React, /* useState, */ useContext } from 'react';
import styles from './index.module.css';
import Row from '../row';
import { Context } from '../../../context';
import LoadedComponent from '../../isLoading';
import AddNewWord from '../newword';


function Table({ isLoading, error, loadData }) {
    const context = useContext(Context); //в context  должны прийти words из Provider
    console.log(context)
    /* const [wordList, setWords] = useState(context);
        const updateWord = (word) => {
        const new_words = wordList.map(item => {
            if (item.id === word.id) {
                return word
            }
            else {
                return item
            }
        })
        setWords(new_words)
    } */
    return (
        <LoadedComponent isLoading={isLoading} error={error}>
            <div className={styles.wraper}>
                <table className={styles.table}>
                    <caption><h1>Слова для изучения</h1></caption>
                    <thead className={styles.thead}>
                        <tr className={styles.tr}>
                            <td>id</td>
                            <td>english</td>
                            <td>transcription</td>
                            <td>russian</td>
                            <td>Action</td>
                        </tr>
                    </thead>

                    <tbody className={styles.tbody}>
                        {context.map(word =>
                            <Row
                                id={word.id}
                                english={word.english}
                                transcription={word.transcription}
                                russian={word.russian}
                                refreshData={loadData}
                            />
                        )}
                        <AddNewWord refreshData={loadData}></AddNewWord>
                    </tbody>
                </table>
            </div>
        </LoadedComponent >
    )
}
export default Table;

