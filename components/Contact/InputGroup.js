import React from 'react'
import styles from '../../styles/Contact.module.scss'

const InputGroup = ({ type, label, text, setText, inputRef }) => {
    return (
        <div className={styles.input_group} ref={inputRef}>
            <label>{label}</label>
            {
                type === 'textarea' ?
                <textarea
                    value={text}
                    onChange={e => setText(label, e.target.value)}
                    placeholder={`Enter your ${label}`}
                    required
                /> :
                <input
                    type={type}
                    value={text}
                    onChange={e => setText(label, e.target.value)}
                    placeholder={`Enter your ${label}`}
                    required
                />
            }
        </div>
    )
}
export default InputGroup