import React from 'react'
import classes from '../../css/Card.module.css'
import Button from './Button'

const Card = ({imgSrc,title,desc}) => {
    return (
        <div className={classes.main__container}>
            <img src={imgSrc} alt="Popular" className={classes.image} />
            <div className={classes.details__container}>
                <h3>{title}</h3>
                <p>Fresh and juicy meat at your doorstep within 1 hour.</p>
            </div>
            <div className={classes.bottom}>
                <Button>Add to cart</Button>
            </div>
        </div>
    )
}

export default Card

