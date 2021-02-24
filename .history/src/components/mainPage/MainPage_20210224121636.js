import classes from './mainPage.module.scss'
import React from 'react'

const MainPage = ()=>{
    return(
        <div className={classes.main_page_container}>
            <div>
                <p><span>Hello,</span></p>
                <p>I'm Sebastian Armata</p>
                <p>A Frontend <span>Developer</span></p>
            </div>
            <div></div>
        </div>
    )
}
export default MainPage