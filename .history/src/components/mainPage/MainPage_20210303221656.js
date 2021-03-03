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
                        textStyle={{ fontFamily: 'Red Hat Display',color: '#FFB300',fontSize: '50px' }}
                        startDelay={100}
                        cursorColor="#FFB300"
                        text="<Hello,"
                        typeSpeed={150}/>
          </span></p>
                <p><TypeWriterEffect
                        textStyle={{ fontFamily: 'Red Hat Display',color: '#FFB300',fontSize: '50px' }}
                        startDelay={1200}
                        cursorColor="#FFB300"
                        text="I'm Sebastian Armata"
                        typeSpeed={150}/></p>
                <p><TypeWriterEffect
                        textStyle={{ fontFamily: 'Red Hat Display',color: '#FFB300',fontSize: '50px' }}
                        startDelay={5000}
                        cursorColor="#FFB300"
                        text="A Frontend Developer />"
                        typeSpeed={150}/></p>
            </div>
            <div className={classes.programmer}>
                <img src={programmer} alt=""></img>
            </div>
        </div>
    )
}
export default MainPage