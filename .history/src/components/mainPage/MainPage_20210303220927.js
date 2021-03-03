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
                        multiText={[
                            "<Hello,",
                            "I'm Sebastian Armata",
                            "A Frontend Developer />"
                        ]}
                        typeSpeed={150}/>
          </span></p>
            </div>
            <div className={classes.programmer}>
                <img src={programmer} alt=""></img>
            </div>
        </div>
    )
}
export default MainPage