import classes from './mainPage.module.scss'
import React from 'react'
import programmer from '../../icons/programmer.svg'
import TypeWriterEffect from 'react-typewriter-effect';


const MainPage = ()=>{
    return(
        <div className={classes.main_page_container}>
            <div>
                <p><span>
                    <TypeWriterEffect
                        textStyle={{color: '#FFB300',fontSize: '40px' }}
                        startDelay={100}
                        cursorColor="#FFB300"
                        text="<Hello,"
                        typeSpeed={100}/>
          </span></p>
                <p><TypeWriterEffect
                        textStyle={{color: '#FFB300',fontSize: '40px' }}
                        startDelay={1500}
                        cursorColor="#FFB300"
                        text="I'm Sebastian Armata"
                        typeSpeed={100}/></p>
                <p><TypeWriterEffect
                        textStyle={{ color: '#FFB300',fontSize: '40px' }}
                        startDelay={4000}
                        cursorColor="#FFB300"
                        text="A Frontend Developer />"
                        typeSpeed={100}/></p>
            </div>
            <div className={classes.programmer}>
                <img src={programmer} alt=""></img>
            </div>
        </div>
    )
}
export default MainPage