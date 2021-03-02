import classes from './header.module.scss'
import React, { useState } from 'react'
import logo from '../../icons/logo_armata.svg'
import { FaBars } from 'react-icons/fa';
const Header = ()=>{
    const [isHamburgerMenu, setIsHamburgerMenu]=useState(false)
    const displayMenu=()=>{
        setIsHamburgerMenu(prev=>!prev)
        console.log("responsive");
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
            <FaBars className={classes.hamburger} onClick={displayMenu}/>
        </div>
    )
}
export default Header