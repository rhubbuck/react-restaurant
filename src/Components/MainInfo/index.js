import React from 'react';
import { MainContainer } from './MainInfoElements';
import Contact from './Contact';
import About from './About';

const MainInfo = () => {
    return (
       <MainContainer>
            <Contact />
            <About />
       </MainContainer>
    )
}

export default MainInfo
