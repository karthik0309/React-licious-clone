import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../../css/NavItem.module.css'

const NavItem = ({to,name}) => {
    return (
        <Link to={to} className={classes.nav__link}>{name}</Link>
    )
}

export default NavItem