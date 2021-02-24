import classes from './header.module.scss'
import React from 'react'
import logo from '../../icons/logo_armata.svg'

const Header = ()=>{
    return(
        <div className={classes.header}>
            <img src={logo} alt="logo"></img>
            <ul>
                <li>About me</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
export default Header