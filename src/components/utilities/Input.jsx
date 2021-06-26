import React from 'react'
import classes from '../../css/Input.module.css'

const Input = ({label,...rest}) => {

    return (
        <div className={classes.main__container}>
            <input type="text" {...rest} className={classes.text__input} required/>
            <label htmlFor="" className={classes.label}>{label}</label>
            <div className={classes.line}></div>
        </div>
    )
}

export default Input
