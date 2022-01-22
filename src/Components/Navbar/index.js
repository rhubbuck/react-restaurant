import React, {Component} from 'react';
import { Nav, 
        NavbarContainer, 
        NavLogo, 
        NavLinkContainer, 
        NavLink,
        Dropdown,
        DropdownLink } from './NavbarElements';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {

    state = {
        visible: false,
    }

    render() {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo>
                        Nama
                    </NavLogo>
                    <FontAwesomeIcon className={styles.icon} icon={faBars} style={{color: '#fff'}} onClick={() => {
                        this.setState( prevState => ({visible: !prevState.visible}))}}>
                    </FontAwesomeIcon>
                    <NavLinkContainer>
                        <Link style={{borderRight: '2px solid white'}} activeClass="active" to="about" spy={true} smooth={true} offset={-80}><NavLink>About</NavLink></Link>
                        <Link style={{borderRight: '2px solid white'}} activeClass="active" to="menus" spy={true} smooth={true} offset={-80}><NavLink>Menus</NavLink></Link>
                        <Link activeClass="active" to="reservations" spy={true} smooth={true} offset={-80}><NavLink>Reservations</NavLink></Link>
                    </NavLinkContainer>
                </NavbarContainer>
                {this.state.visible ? 
                <Dropdown>
                    <Link style={{width: '100%'}} onClick={() => {this.setState({visible: false})}} activeClass="active" to="about" spy={true} smooth={true}><DropdownLink activeClass="active" to="about" spy={true} smooth={true}>About</DropdownLink></Link>
                    <Link style={{width: '100%'}} onClick={() => {this.setState({visible: false})}} activeClass="active" to="menus" spy={true} smooth={true}><DropdownLink activeClass="active" to="menus" spy={true} smooth={true}>Menu</DropdownLink></Link>
                    <Link style={{width: '100%'}} onClick={() => {this.setState({visible: false})}} activeClass="active" to="reservations" spy={true} smooth={true}><DropdownLink>Reservations</DropdownLink></Link>
                </Dropdown>
                : null}
            </Nav>    
        </>
    )
}
}

export default Navbar
