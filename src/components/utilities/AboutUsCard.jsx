import React from 'react'
import classes from '../../css/AboutUsCard.module.css'

const AboutUsCard = ({imgSrc,title,description}) => {
    return (
        <div className={classes.main__container}>
            <img src={imgSrc} alt="AboutUs" className={classes.image}/>
            <div className={classes.details}>
                <h2 className={classes.title}>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}


export default AboutUsCard
