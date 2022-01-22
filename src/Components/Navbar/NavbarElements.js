import styled from 'styled-components';


export const Nav = styled.nav`
    background: #000;
    height: 80px;
    position: fixed;
    width: 100%; 
    z-index: 20;
        width: 100vw;
`

export const NavbarContainer = styled.div`
    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    width: 100%;
    @media (max-width: 480px) {
        padding: 1rem;
  }
`

export const Icon = styled.div`
     @media (max-width: 480px) {
        display: none;
  }
`

export const NavLogo = styled.div`
    color: #fff;
    cursor: pointer;
    font-size: 2.5rem;
    font-family: 'Comfortaa', cursive;
    font-weight: 700;

`

export const NavLinkContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 400px;
    list-style-type: none;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    @media (max-width: 480px) {
        display: none;
  }
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

export const Dropdown = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const DropdownLink = styled.li`
    color: #fff;
    list-style-type: none;
    font-size: 24px;
    padding: 10px;
    background-color: #000;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #fff;
`