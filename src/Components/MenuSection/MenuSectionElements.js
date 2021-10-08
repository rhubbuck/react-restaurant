import styled from "styled-components";

export const MenusContainer = styled.div`
        border-right: 1px solid gray;
        padding-right: 80px;
`

export const MenusSection = styled.div`
    display: flex;
    flex-direction: row;
    margin: 60px 220px;
`

export const MenuHeader = styled.h2`
    font-size: 3rem;
    margin-bottom: 40px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
`

export const SectionHeader = styled.h3`
    font-size: 2rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    color: red;
`

export const MenuSection = styled.ul`
    list-style-type: none;
    margin: 15px;
`

export const SectionItem = styled.li`
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    margin: 5px;
    cursor: pointer;
    transition: .1s;
    &:hover {
        color: red;
    }
`
export const ItemContainer = styled.div`
    margin: 10px 50px;
`

export const ItemHeader = styled.div`
    font-size: 1.8rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    color: red;
    border-bottom: 1px solid gray;
    padding-bottom: 5px;
    padding-right: 400px;
`

export const SectionDescription = styled.div`
    margin: 5px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
`
export const LunchTitle = styled.h2`
    margin: 40px 40px 0 60px;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
`

export const Item = styled.div`
    padding-top: 20px;
`

export const Items = styled.div`
    display: flex;
    flex-direction: column;
`

export const ItemTitle = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
`

export const Price = styled.p`
    margin-left: 10px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
`

export const LineOne = styled.div`
 padding: 5px 0;
 display: flex;
`

export const LineTwo = styled.div`
     font-family: 'Open Sans', sans-serif;
     margin-left: 15px;
     font-weight: 300;
`