import React,{useState} from 'react'
import classes from '../../css/NavBar.module.css'
import NavItem from './NavItem'

const NavBar = ({loginClick,show}) => {

    const [showSideBar,setShowSideBar]  = useState(false);
    const [navClass,setNavClass]=useState([classes.nav__items]);

    const handleClick=()=>{
        if(showSideBar===false){
            setNavClass([...navClass ,classes.active])
        }else if(showSideBar===true){
            setNavClass([classes.nav__items])
        }
        setShowSideBar(!showSideBar)
    }

    return (
        <div className={classes.main__container}>
            <h1 className={classes.logo}>Bone Appetit</h1>
            <div className={navClass.join(" ")}>
                <NavItem to="/" name="Home" onClick={handleClick}/>
                <NavItem to="/Search" name="Search" onClick={handleClick}/>
                <NavItem to="/AboutUs" name="About Us" onClick={handleClick}/>
                {show && <p onClick={loginClick} className={classes.login}>Login</p>}
            </div>
            <div className={classes.hamburger} onClick={handleClick}>
                <div className={classes.h1}></div>
                <div className={classes.h2}></div>
                <div className={classes.h3}></div>
            </div>
        </div>
    )
}

export default NavBar
