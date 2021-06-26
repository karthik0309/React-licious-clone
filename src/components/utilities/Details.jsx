import React from 'react'
import classes from '../../css/Details.module.css'
import {Description} from '../../constants/constant'
import AboutUsCard from './AboutUsCard'
import AboutUsDetails from '../../json/AboutUs.json'

const Details = () => {
    return (
        <div className={classes.main__container}>
            <h1 className={classes.title}>Bone Appetit 
                <span className={classes.span}>Promise</span>
            </h1>
            <p className={classes.description}>
                {Description}
            </p>
            {AboutUsDetails.map((ele,index)=>(
                <AboutUsCard 
                imgSrc={ele.link}
                title={ele.title}
                description={ele.description}
                />
            ))
            }
            <h1 className={classes.bottom}>Bone 
                <span className={classes.span}>Appetit</span>
            </h1>
        </div>
    )
}

export default Details
