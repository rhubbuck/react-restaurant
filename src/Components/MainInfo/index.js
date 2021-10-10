import React from 'react';
import { MainContainer, LeftColumn } from './MainInfoElements';
import Contact from './Contact';
import About from './About';
import Reservations from '../Reservations';

const MainInfo = () => {
    return (
       <MainContainer>
            <LeftColumn>
                <Contact />
                <Reservations />
            </LeftColumn>
            <About />
       </MainContainer>
    )
}

export default MainInfo
