import React from 'react';
import { Nav, 
        NavbarContainer, 
        NavLogo, 
        NavLinkContainer, 
        NavLink } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo>
                        Nama
                    </NavLogo>
                    <NavLinkContainer>
                        <NavLink>About</NavLink>
                        <NavLink>Menus</NavLink>
                        <NavLink>Reservations</NavLink>
                    </NavLinkContainer>
                </NavbarContainer>
            </Nav>    
        </>
    )
}

export default Navbar
