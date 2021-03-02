import classes from './header.module.scss'
import React from 'react'
import logo from '../../icons/logo_armata.svg'
import { FaBars } from 'react-icons/fa';
const Header = ()=>{
    return(
        <div className={classes.header}>
            <img src={logo} alt="logo"></img>
            <ul>
                <li>About me</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <FaBars className={classes.hamburger}/>
        </div>
    )
}
export default Header