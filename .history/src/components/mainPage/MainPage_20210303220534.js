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
                        textStyle={{ fontFamily: 'Red Hat Display',color: '#FFB300' }}
                        startDelay={100}
                        cursorColor="#FFB300"
                        text="Hello,"
                        typeSpeed={100}/>
          </span></p>
                <p>I'm Sebastian Armata</p>
                <p>A Frontend <span>Developer</span></p>
            </div>
            <div className={classes.programmer}>
                <img src={programmer} alt=""></img>
            </div>
        </div>
    )
}
export default MainPage