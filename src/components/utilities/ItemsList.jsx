import React from 'react'
import classes from '../../css/ItemsList.module.css'
import Items from '../../json/Icons.json'

const ItemsList = () => {

    return (
        <div className={classes.main__container}>
            <div className={classes.items__list}>
            {Items.map((ele)=>(
                <div className={classes.icon__container} key={ele.Descriprtion}>
                    <img src={ele.IconLink} className={classes.icon} alt={ele.Descriprtion}/>
                    <p>{ele.Descriprtion}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ItemsList
