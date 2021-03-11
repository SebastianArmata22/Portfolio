import classes from './header.module.scss'
import React, {useState } from 'react'
import logo from '../../icons/logo_armata.svg'
const Header = ({reference})=>{
    const [isHamburgerMenu, setIsHamburgerMenu]=useState(false)
    const displayMenu=()=>{
        setIsHamburgerMenu(prev=>!prev)
    }
    const showAboutMe = () =>{
        console.log(ref)
        reference.refAbouMe.current.scrollIntoView()
    }

    return(
        <div className={classes.header}>
            <img src={logo} alt="logo"></img>
            <ul className={isHamburgerMenu && classes.responsiveMenu}>
                <li onClick={showAboutMe}>About me</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <label for="check" className={classes.hamburger} >
                <input type="checkbox" id="check" onChange={displayMenu}/>
                <span></span>
                <span></span>
                <span></span>
            </label>
            </div>
    )
}
export default Header