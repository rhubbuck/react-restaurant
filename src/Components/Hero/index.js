import React from 'react';
import { HeroContainer, HeroTextContainer, HeroTitle, HeroSubtitle } from './HeroElements';

const Hero = () => {
    return (
        <HeroContainer>
            <HeroTextContainer>
                <HeroTitle>Nama</HeroTitle>
                <HeroSubtitle>Sushi - Ramen - Sake</HeroSubtitle>
            </HeroTextContainer>
        </HeroContainer>
    )
}

export default Hero
