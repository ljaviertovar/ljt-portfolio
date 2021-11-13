import React from 'react';

import PText from '../components/PText';
import Button from '../components/Button';

import AboutImg from '../assets/images/about-page-img.png';
import styled from 'styled-components';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner'

const AboutPageStyles = styled.div`
    padding: 20rem 0;
    .top-section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    .left {
        flex: 3;
    }
    .right {
        flex: 2;
    }
    .about__subheading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
        span {
            background-color: var(--deep-dark);
            padding: 0.5rem;
            border-radius: 8px;
        }
    }
    .about__heading {
        font-size: 3.6rem;
        margin-bottom: 3rem;
    }
    .about__info {
        margin-bottom: 4rem;
        .para {
            max-width: 100%;
        }
    }
    .right {
        img {
            border: 2px solid var(--gray-1)
        }
    }
    .about__info__items {
        margin-top: 15rem;
    }
    .about__info__item {
        margin-bottom: 10rem;
    }
    .about__info__heading {
        font-size: 3.6rem;
        text-transform: uppercase;
    }
    @media only screen and (max-widt: 768px) {
        padding: 10rem 0;
        .top-section{
            flex-direction: column;
            gap: 5rem;
        }
        .about__subheading {
            font-size: 1.8rem;
        }
        .about__heading {
            font-size: 2.8rem;
        }
        .about__info__heading {
            font-size: 3rem;
        }
    }
`;

const About = () => {
    return (
        <AboutPageStyles>
            <div className='container'>
                <div className='top-section'>
                    <div className='left'>
                        <p className='about__subheading'>
                            Hi, I am <span>Javier Tovar</span>
                        </p>
                        <h2 className='about__heading'>
                            A Web Developer
                        </h2>
                        <div className='about__info'>
                            <PText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu tincidunt arcu, nec commodo lorem. Praesent iaculis blandit mi, at eleifend nibh iaculis eget. Sed id eros condimentum, porta sapien ut, lacinia dui.
                                <br /><br />
                                Donec sodales, odio id dictum molestie, neque urna hendrerit leo, eu molestie lectus arcu sagittis urna. Vivamus commodo ante faucibus metus elementum sollicitudin. Vestibulum eleifend scelerisque sem, a feugiat purus varius ac. Quisque eu nisl ante. Aliquam placerat at tortor quis iaculis. Nunc feugiat nec erat in volutpat.
                                <br /><br />
                                Etiam tincidunt diam nec sapien aliquet cursus. In nec maximus orci. Aliquam sed nisl fringilla, facilisis turpis ut, finibus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </PText>
                        </div>
                        <Button
                            btnText='Download CV'
                            btnLink='#'
                        />
                    </div>

                    <div className='right'>
                        <img
                            src={AboutImg}
                            alt='L Javier Tovar'
                        />
                    </div>
                </div>

                <div className='about__info__items'>
                    <div className='about__info__item'>
                        <h1 className='about__info__heading'>Experiences</h1>
                        <AboutInfoItem
                            title='2018-2021'
                            items={[
                                'Fullstack developer at CPA Vision'
                            ]}
                        />
                    </div>
                    <div className='about__info__item'>
                        <h1 className='about__info__heading'>My Skills</h1>
                        <AboutInfoItem
                            title='Front-end'
                            items={[
                                'HTML',
                                'CSS'
                            ]}
                        />
                        <AboutInfoItem
                            title='Back-end'
                            items={[
                                'Nodejs',
                                'PHP'
                            ]}
                        />
                    </div>
                    <div className='about__info__item'>
                        <h1 className='about__info__heading'>Education</h1>
                        <AboutInfoItem
                            title='School'
                            items={[
                                'IPN UPIICSA'
                            ]}
                        />
                        <AboutInfoItem
                            title='College'
                            items={[
                                'IPN UPIICSA'
                            ]}
                        />
                    </div>
                </div>
            </div>
            <ContactBanner/>
        </AboutPageStyles>
    )
}

export default About
