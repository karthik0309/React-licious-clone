import React,{useState} from 'react'
import NavBar from './components/navigation/NavBar'
import ItemsList from './components/utilities/ItemsList'
import Carousel from './components/utilities/Carousel'
import Login from './components/login/Login'
import classes from './App.module.css'

const App = () => {

  const [showLogin,setShowLogin]=useState(false)

  const handleClick=()=>{
    setShowLogin(!showLogin)
  }
  return (
    <div className={classes.main__container}>
      <NavBar loginClick={handleClick} show={true}/>
      <ItemsList/>
      <Carousel/>
      <Login show={showLogin}/>
    </div>
  )
}

export default App
