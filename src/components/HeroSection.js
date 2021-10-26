import React from 'react'

import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import PText from './PText';

const HeroSection = () => {
    return (
        <div>
            <div className='container'>
                <h1 className='hero__heading'>
                    <span>Hello, This is</span>
                    <span>Javier Tovar</span>
                </h1>

                <div className='hero__img'>
                    <img src={HeroImg} alt='Luis Javier Tovar'/>
                </div>

                <div className='hero__info'>
                    <PText>
                        I am working as fullstack web developer for 4 years.
                        I love to make new web experiences for the people. 
                    </PText>
                    <Button
                        btnLink='/projects'
                        btnText='See my works'
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
