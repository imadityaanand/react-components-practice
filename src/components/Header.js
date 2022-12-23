import React from "react";
import HeaderLink from "./HeaderLink";

function Header() {
    return(
        <header>
            <img className="logo" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt=""></img>
            <nav>
            <ul className='nav_links'>
                <HeaderLink text="Home" />
                <HeaderLink text="About" />
                <HeaderLink text="More" />
            </ul>

            </nav>
            <a className='cta' href='#'><button>Contact</button></a>
        </header>
    )
}

export default Header;