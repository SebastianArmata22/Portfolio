import classes from './header.module.scss'
import React, { useState } from 'react'
import logo from '../../icons/logo_armata.svg'
import { FaBars } from 'react-icons/fa';
const Header = ()=>{
    const [isHamburgerMenu, setIsHamburgerMenu]=useState(false)
    const displayMenu=()=>{
        setIsHamburgerMenu(prev=>!prev)
    }
    return(
        <div className={classes.header}>
            <img src={logo} alt="logo"></img>
            <ul className={isHamburgerMenu && classes.responsiveMenu}>
                <li>About me</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <div className={classes.hamburger} onClick={displayMenu}>
            <label for="check">
                <input type="checkbox" id="check"/>
                <span></span>
                <span></span>
                <span></span>
            </label>
            </div>
        </div>
    )
}
export default Header