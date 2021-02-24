import header from './header.scss'
import React from 'react'
import logo from '../../icons/logo_armata.svg'

const Header = ()=>{
    return(
        <div className={header.header__container}>
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