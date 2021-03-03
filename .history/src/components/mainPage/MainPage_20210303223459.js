import classes from './mainPage.module.scss'
import React from 'react'
import programmer from '../../icons/programmer.svg'
import TypeWriterEffect from 'react-typewriter-effect';


const MainPage = ()=>{
    return(
        <div className={classes.main_page_container}>
            <div>
                <TypeWriterEffect
                        textStyle={{color: '#FFB300' }}
                        startDelay={1000}
                        cursorColor="white"
                        text="<Hello,"
                        loop={true}
                        typeSpeed={100}/>
                <TypeWriterEffect
                        textStyle={{color: '#ffffff' }}
                        startDelay={2000}
                        cursorColor="#FFB300"
                        text="I'm Sebastian Armata"
                        typeSpeed={100}/>
                <TypeWriterEffect
                        textStyle={{ color: '#FFB300' }}
                        startDelay={4500}
                        cursorColor="#FFB300"
                        text="A Frontend Developer />"
                        typeSpeed={100}/>
            </div>
            <div className={classes.programmer}>
                <img src={programmer} alt=""></img>
            </div>
        </div>
    )
}
export default MainPage