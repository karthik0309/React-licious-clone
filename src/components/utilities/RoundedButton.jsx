import React from 'react'
import classes from '../../css/RoundedButton.module.css'

const RoundedButton = ({children,onClick}) => {
    return (
        <button value={children} onClick={onClick} className={classes.button__rounded}>
            {children}
        </button>
    )
}

export default RoundedButton
