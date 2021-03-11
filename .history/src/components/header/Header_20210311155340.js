import classes from './header.module.scss'
import React, {useState } from 'react'
import logo from '../../icons/logo_armata.svg'
const Header = ({refAbouMe,refSkills,refProjects, refContact})=>{
    const [isHamburgerMenu, setIsHamburgerMenu]=useState(false)
    const displayMenu=()=>{
        setIsHamburgerMenu(prev=>!prev)
    }
    const displaySection = (reference) =>{
        console.log(reference)
        reference.current.scrollIntoView(
            {behavior: "smooth"}
        )
    }

    return(
        false &&
            {<div className={classes.header}>
            <img src={logo} alt="logo"></img>
            <ul className={isHamburgerMenu && classes.responsiveMenu}>
                <li onClick={()=>displaySection(refAbouMe)}>About me</li>
                <li onClick={()=>displaySection(refSkills)}>Skills</li>
                <li onClick={()=>displaySection(refProjects)}>Projects</li>
                <li onClick={()=>displaySection(refContact)}>Contact</li>
            </ul>
            <label for="check" className={classes.hamburger} >
                <input type="checkbox" id="check" onChange={displayMenu}/>
                <span></span>
                <span></span>
                <span></span>
            </label>
            </div>}
    )
}
export default Header