import React from 'react'
import { AboutHeadline, AboutParagraph, AboutContainer, Reservation, ReservationText, HoursContainer, HoursLabel, HoursText } from './AboutElements'

const About = () => {
    return (
        <AboutContainer>
            <AboutHeadline>About</AboutHeadline>
            <AboutParagraph>Nama is a Japanese-inspired neighborhood pub, or izakaya, featuring artisinal ramen, yakitori (skewered & grilled items), sushi selections, 
            and other Japanese-inspired comfort food that incorporates local, Southern ingredients. The beverage program features craft & rare Japanese beers, cocktails-on-tap, 
            sake, shochu and Japanese whisky. Located in Warehouse Row, Nama offers an unpretentious and comfortable environment – the true izakaya 
            experience – as an urban gathering spot for the community where local and Japanese culture can come together.</AboutParagraph>
            <br></br>
            <Reservation>Reservation Info</Reservation>
            <br></br>
            <ReservationText>
           For parties of 15 or more, or special event requests, please email fakeemail@gmail.com
            </ReservationText>
            <br></br>
            <HoursLabel>Restaurant Hours</HoursLabel>
            <br></br>
            <HoursContainer>
                <HoursText>Sunday-Thursday: 11 AM - 9 PM</HoursText>
                <HoursText>Friday & Saturday: 11 AM - 11 PM</HoursText>
            </HoursContainer>
            </AboutContainer>
    )
}

export default About
