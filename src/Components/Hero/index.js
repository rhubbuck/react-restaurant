import React from 'react';
import { HeroContainer, HeroTextContainer, HeroTitle, HeroSubtitle } from './HeroElements';

const Hero = () => {
    return (
        <HeroContainer style={{backgroundImage: "url('./Images/hero-sushi.jpg')"}}>
            <HeroTextContainer >
                <HeroTitle>Nama</HeroTitle>
                <HeroSubtitle>Sushi - Ramen - Sake</HeroSubtitle>
            </HeroTextContainer>
        </HeroContainer>
    )
}

export default Hero
