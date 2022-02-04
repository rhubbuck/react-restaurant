import styled from 'styled-components';

export const HeroContainer = styled.div`
    /* background-image: url('./Images/hero-sushi.jpg'); */
    min-height: 750px;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    
`

export const HeroTextContainer = styled.div`
    color: #fff;
    padding-left: 70px;
    padding-top: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    @media (max-width: 769px) {
        padding-left: 40px;
  }
  @media (max-width: 480px) {
        padding-left: 20px;
  }
`

export const HeroTitle = styled.h1`
    font-family: 'Comfortaa', cursive;
    font-weight: 700;
    font-size: 164px;
    @media (max-width: 480px) {
        font-size: 74px;
  }
`

export const HeroSubtitle = styled.h3`
    font-family: 'Comfortaa', cursive;
    font-weight: 500;
    font-size: 46px;
    @media (max-width: 480px) {
        font-size: 34px;
  }
`