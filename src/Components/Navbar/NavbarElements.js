import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    width: 100%;
`

export const NavbarContainer = styled.div`
    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    width: 100%;
`

export const NavLogo = styled.div`
    color: #fff;
    cursor: pointer;
    font-size: 2.5rem;
    font-family: 'Open Sans', sans-serif;

`

export const NavLinkContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 400px;
    list-style-type: none;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
`

export const NavLink = styled.li`
    color: #fff;
    border-right: 2px solid white;
    padding: 0 15px;
    cursor: pointer;
    transition: .2s;
    &:last-of-type {
        border-right: none;
    }
    &:hover {
        color: red;
    }
`