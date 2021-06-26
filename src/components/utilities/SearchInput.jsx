import React from 'react'
import classes from '../../css/SearchInput.module.css'

const SearchInput = ({onClick,...rest}) => {
    return (
        <div  className={classes.main__container}>
            <input type="text" {...rest} className={classes.input}/>
            <button className={classes.button} onClick={onClick}>Search</button>
        </div>
    )
}

export default SearchInput
