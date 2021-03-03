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
                        startDelay={100}
                        cursorColor="#FFB300"
                        text="&lt;"
                        typeSpeed={100}/>
                <TypeWriterEffect
                        textStyle={{color: '#FFB300' }}
                        startDelay={200}
                        cursorColor="#FFB300"
                        text="Hello,"
                        typeSpeed={100}/>
                <TypeWriterEffect
                        textStyle={{color: '#FFB300' }}
                        startDelay={1500}
                        cursorColor="#FFB300"
                        text="I'm Sebastian Armata"
                        typeSpeed={100}/>
                <TypeWriterEffect
                        textStyle={{ color: '#FFB300' }}
                        startDelay={4000}
                        cursorColor="#FFB300"
                        text="A Frontend Developer />"
                        typeSpeed={100}/>
                <TypeWriterEffect
                        textStyle={{color: '#FFB300' }}
                        startDelay={100}
                        cursorColor="#FFB300"
                        text="/&gt;"
                        typeSpeed={100}/>
            </div>
            <div className={classes.programmer}>
                <img src={programmer} alt=""></img>
            </div>
        </div>
    )
}
export default MainPage