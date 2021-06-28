import React,{useState} from 'react'
import Card from './Card'
import SearchInput from './SearchInput'
import RoundedButton from './RoundedButton'
import {SearchTags} from '../../constants/constant'
import PopularItems from '../../json/AboutUs.json'
import classes from '../../css/SearchBar.module.css'
import axios from 'axios'
import {API_URL} from '../../constants/constant'
require("dotenv").config()

const SearchBar = () => {

    const [input,setInput]=useState('')
    const [title,setTitle]=useState('')
    const [images,setImages]=useState([])

    const handleChange=(e)=>{
        setInput(e.target.value)
    }

    const sendRequest=(param)=>{
        axios.get(API_URL,{
            params:{query:param},
            headers:{
                Authorization:`Client-ID ${process.env.REACT_APP_API_KEY}`
            }
        }).then(res=>{
            setImages(res.data.results)
        }).catch((err)=>{
            console.log(err)
        })
        setTitle(param)
    }
    const handleClick=()=>{
        sendRequest(input)
    }

    const handleTagClick=(ele)=>{
        setInput(ele)
        sendRequest(ele)
    }

    return (
        <div className={classes.main__container}>
            <div className={classes.search__by__tag}>
                <h2 className={classes.search__title}>Search by tag</h2>
                <div className={classes.search_tag_container}>
                    {SearchTags.map((ele)=>(
                        <RoundedButton key={ele} value={ele} onClick={e=>handleTagClick(ele)}>
                            {ele}
                        </RoundedButton>
                    ))}
                </div>
            </div>
            <div className={classes.search__contanier}>
                <div className={classes.search__bar}>
                    <SearchInput 
                    onChange={handleChange} 
                    value={input}
                    placeholder="Enter food to be searched"
                    onClick={handleClick}/>
                </div>
                {images.length>0 &&
                <div className={classes.search__results}>
                    <h1 className={classes.popular__title}>Results</h1>
                    <div className={classes.results__container}>
                        {images.map((ele,index)=>(
                            <Card key={index} 
                            imgSrc={ele.urls.regular}
                            title={title}
                            desc={ele.alt_description}/>
                        ))}
                    </div>  
                </div>}
                <div className={classes.popular__container}>
                    <h1 className={classes.popular__title}>Popular Searches</h1>
                    <div className={classes.popular__results}>
                    {PopularItems.map((ele,index)=>(
                        <Card key={index} 
                        imgSrc={ele.link} 
                        title={ele.card}/>
                    ))}          
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
