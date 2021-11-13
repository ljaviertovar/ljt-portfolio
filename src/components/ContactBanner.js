import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

const ContactBannerStyles = styled.div`
    padding: 10rem 0;
    .contactBanner__wraper {
        background-color: var(--deep-dark);
        border-radius: 12px;
        padding: 5rem 0;
        text-align: center;
        .contactBanner__heading{
            font-size: 4rem;
            margin-bottom: 2rem;
        }
    }
    @media only screen and (max-with: 768px){
        .contactBanner__heading{
            font-size: 2.8rem;
        }
    }
`;

const ContactBanner = () => {
    return (
        <ContactBannerStyles>
            <div className='container'>
                <div className='contactBanner__wraper'>
                    <PText>
                        Have a project in maind
                    </PText>
                    <h3 className='contactBanner__heading'>
                        Let me help you
                    </h3>
                    <Button
                        btnText='Contact Now'
                        btnLink='/contact'
                    ></Button>
                </div>
            </div>
        </ContactBannerStyles>
    )
}

export default ContactBanner
