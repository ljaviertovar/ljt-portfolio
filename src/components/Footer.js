import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
    padding-top: 10rem;
    background-color: var(--deep-dark);
    .container {
        display: flex;
        gap: 3rem;
    }
    .footer__col1 {
        flex: 2;
    }
    .footer__col2
    .footer__col3,
    .footer__col4 {
        flex: 1;
    }
    .footer__col1__title {
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }
    @media only screen and (max-width: 768px){
        .container {
            flex-direction: column;
            gap: 0;
            & > div {
                margin-top: 5rem;
            }
        }
        .footer__col1 .para{
            max-width: 100%;
        }
    }
`;

const Footer = () => {
    return (
        <FooterStyles>
            <div className='container'>
                <div className='footer__col1'>
                    <h1 className='footer__col1__title'>
                        L Javier Tovar
                    </h1>
                    <PText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu tincidunt arcu, nec commodo lorem. Praesent iaculis blandit mi, at eleifend nibh iaculis eget.
                    </PText>
                </div>

                <div className='footer__col2'>
                    <FooterCol
                        heading='Important Links'
                        links={
                            [
                                {
                                    title: 'Home',
                                    path: '/',
                                    type: 'Link'
                                },
                                {
                                    title: 'Home',
                                    path: '/',
                                    type: 'Link'
                                }
                            ]
                        }
                    />
                </div>
                <div className='footer__col3'>
                    <FooterCol
                        heading='Contact Info'
                        links={
                            [
                                {
                                    title: '+525524406870',
                                    path: 'tel:+525524406870'
                                },
                                {
                                    title: 'luisjavier_tovar@outlook.com',
                                    path: 'mailto:luisjavier_tovar@outlook.com',
                                }
                            ]
                        }
                    />
                </div>
                <div className='footer__col4'>
                    <FooterCol
                        heading='Social Links'
                        links={
                            [
                                {
                                    title: 'LinkedIn',
                                    path: '/linkedin',
                                    type: 'Link'
                                },
                                {
                                    title: 'GithHub',
                                    path: '/github',
                                    type: 'Link'
                                }
                            ]
                        }
                    />
                </div>
            </div>
        </FooterStyles>
    )
}

export default Footer
