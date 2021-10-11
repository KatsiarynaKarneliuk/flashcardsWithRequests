import { React, useState } from 'react'
import BtnAction from '../btnAction';
import styles from './index.module.css';



const AddNewWord = ({ refreshData }) => {
    const [value, setValue] = useState({
        english: '',
        russian: '',
        transcription: '',
    });

    const [errors, setErrors] = useState({   /* чтобы перебрать значения свойств О,надо получить доступ к массиву его значений */
        english: false,
        russian: false,
        transcription: false
    })
    const isSaveDisabled = Object.values(errors).some(el => el);

    const handleChangeWord = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: !e.target.value.trim() })
    }
    const handleSave = () => {
        if (!/^[a-zA-Z]+$/.test(value.english)) {
            setErrors({ ...errors, english: "Только английские буквы" })
        }

        else if (!/^[а-яА-Я]+$/.test(value.russian)) {
            setErrors({ ...errors, russian: "Только на кирилице" })
        } else {
            fetch('/api/words/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    english: value.english,
                    russian: value.russian,
                    transcription: value.transcription,
                    tags: []
                })
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Something went wrong')
                    }
                })
                .then(() => refreshData())
        }
    }
    return (
        <tr>
            <td>
                <input name={'english'} className={errors.english && styles.error_input} onChange={handleChangeWord} value={value.english} />
                <div className={styles.textError}>{errors.english && errors.english}</div>
            </td>
            <td>
                <input name={'transcription'} className={errors.transcription && styles.error_input} onChange={handleChangeWord} value={value.transcription} />
                <div >{errors.transcription && errors.transcription}</div>
            </td>
            <td>
                <input name={'russian'} className={errors.russian && styles.error_input} onChange={handleChangeWord} value={value.russian} />
                <div>{errors.russian && errors.russian} </div>
            </td>
            <td>
                <BtnAction className={styles.btnAction} btnName="saveNewWord" onClick={handleSave} disabled={isSaveDisabled} />
            </td>
        </tr>
    )
}

export default AddNewWord;

