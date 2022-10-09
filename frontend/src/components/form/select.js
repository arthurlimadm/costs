import React from "react"
import styles from './select.module.css'

function Select ({ text, name, options, handleOnChange, value }) {
    return(<div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <div>
            <select 
            name={name} 
            id={name} 
            onChange={handleOnChange} 
            value={value || ''}
            >
                {options.map((option) => (
                        <option 
                        value={option.id} 
                        key={option.id}>
                            {option.name}
                        </option>
                    ))}
            </select>
            </div>
        </div>)
}

export default Select
