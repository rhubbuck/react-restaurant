import React from 'react';
import {ContactHeader, ContactInfo, ContactLine, ContactContainer} from './ContactElements';

const Contact = () => {
    return (
        <ContactContainer>
            <ContactHeader>Contact Us</ContactHeader>
            <ContactInfo>
                <ContactLine>5130 Fake Street</ContactLine>
                <ContactLine>Knoxville, TN 33333</ContactLine>
                <ContactLine>(865) 555-5555</ContactLine>
                <ContactLine>Email: fakeemail@gmail.com</ContactLine>
            </ContactInfo>
       </ContactContainer>
    )
}

export default Contact
