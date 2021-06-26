import React,{useState,useEffect} from 'react'
import classes from '../../css/Login.module.css'
import Button from '../utilities/Button'
import Input from '../utilities/Input'

const Login = ({show}) => {

    const [email,setEmail]=useState('')
    const [error,setError]=useState('')
    const [success,setSuccess]=useState(false)
    const [showLogin,setShowLogin]=useState([classes.main__container])

    useEffect(()=>{
        setShowLogin([classes.main__container,classes.show])
    },[show])

    const validateEmail=(email)=>{
        let regEx = /\S+@\S+\.\S+/;
        return regEx.test(email);
    }

    const handleInputChange=(e)=>{
        setEmail(e.target.value)
    }

    const handleSubmit=()=>{
        if(!validateEmail(email)){
            setError('Enter valid email')
            return;
        }
        localStorage.setItem("user",JSON.stringify(email))
        setError('')
        setSuccess(true)
    }

    const handleClose=()=>{
        setShowLogin([classes.main__container,classes.close]);
    }
    
    return (
        <div className={showLogin.join(" ")}>
            <div className={classes.header}>
                <h1 className={classes.logo}>Bone Appetit</h1>
                <p className={classes.cross} onClick={handleClose}>+</p>
            </div>
            <div className={classes.login__container}>
                <h2 className={classes.title}>SignIn/SignUp</h2>
                <Input 
                label="Enter Email"
                onChange={e=>handleInputChange(e)}
                value={email}
                />
                <Button onClick={handleSubmit}>Submit</Button>
                {error!=='' ? <p className={classes.error}>{error}</p> : null}
                {success ? <p className={classes.success}>Successfully logged in</p> : null}
            </div>
        </div>
    )
}

export default Login
