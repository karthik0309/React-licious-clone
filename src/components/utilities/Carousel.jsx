import React,{useState,useRef,useEffect} from 'react'
import classes from '../../css/Carousel.module.css'
import CarouselImages from '../../json/Carousel.json'

const Carousel = () => {

    const [currSlide,setCurrSlide]=useState(0)
    const  length=CarouselImages.length
    const timeoutRef = useRef(null);


    const leftArrow=["fas fa-arrow-circle-left",classes.left__arrow]
    const rigthArrow=["fas fa-arrow-circle-right",classes.right__arrow]
    const delay = 2500;

    const resetTimeOut=()=>{
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    const handleNextslide=()=>{
        setCurrSlide(currSlide===length-1 ? 0 : currSlide+1)
    }
    const handlePrevslide=()=>{
        setCurrSlide(currSlide===0 ? length-1 : currSlide-1)
    }

    useEffect(()=>{
        resetTimeOut();
        timeoutRef.current = setTimeout(() =>
            setCurrSlide((prevIndex) =>
              prevIndex === CarouselImages.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
        return () => {
            resetTimeOut();
        };
    },[currSlide])
    return (
        <div className={classes.main__container}>
            <i className={leftArrow.join(" ")} onClick={handlePrevslide}></i>
                {CarouselImages.map((ele,index)=>(
                    <div  className={index===currSlide ? classes.active : classes.curr__slide} key={index}>
                        {index===currSlide && <img src={ele.link} alt="Food" className={classes.image}/>}
                    </div>
                ))}
            <i className={rigthArrow.join(" ")} onClick={handleNextslide}></i>
        </div>
    )
}


export default Carousel
