import React from 'react';
import { Nav, 
        NavbarContainer, 
        NavLogo, 
        NavLinkContainer, 
        NavLink } from './NavbarElements';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo>
                        Nama
                    </NavLogo>
                    <NavLinkContainer>
                        <Link style={{borderRight: '2px solid white'}} activeClass="active" to="about" spy={true} smooth={true}><NavLink>About</NavLink></Link>
                        <Link style={{borderRight: '2px solid white'}} activeClass="active" to="menus" spy={true} smooth={true}><NavLink>Menus</NavLink></Link>
                        <Link activeClass="active" to="reservations" spy={true} smooth={true}><NavLink>Reservations</NavLink></Link>
                    </NavLinkContainer>
                </NavbarContainer>
            </Nav>    
        </>
    )
}

export default Navbar
