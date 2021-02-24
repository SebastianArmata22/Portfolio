import React from 'react'
import logo from '../../icons/logo_armata.svg'

const Header = ()=>{
    return(
        <div>
            <img src={logo} height='30px'></img>
            <ul>
                <li>About me</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
export default Header