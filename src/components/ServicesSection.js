import React from 'react';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
padding: 10rem 0;
.services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
}
@media only screen and (max-width: 768px){
    .services__allItems{
        flex-direction: column;
        max-width: 350px;
        margin: 0 auto;
        margin-top: 5rem;
        gap: 5rem;
    }
}
`;

const ServicesSection = () => {
    return (
        <ServicesItemStyles>
            <div className='container'>
                <SectionTitle
                    heading='Services'
                    subheading='what I will do for you'
                />

                <div className='services__allItems'>
                    <ServicesSectionItem 
                        icon= {<MdDesktopMac/>}
                        title='Web Design'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque laoreet risus ac iaculis. Integer vel molestie orci. Nullam scelerisque, sem ut lobortis aliquam, eros nisl semper mauris, ut varius velit dolor ut magna.'
                    />
                </div>

                <div className='services__allItems'>
                    <ServicesSectionItem 
                        icon= {<MdCode/>}
                        title='Web Design'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque laoreet risus ac iaculis. Integer vel molestie orci. Nullam scelerisque, sem ut lobortis aliquam, eros nisl semper mauris, ut varius velit dolor ut magna.'
                    />
                </div>

                <div className='services__allItems'>
                    <ServicesSectionItem 
                        icon= {<MdPhonelinkSetup/>}
                        title='Web Design'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque laoreet risus ac iaculis. Integer vel molestie orci. Nullam scelerisque, sem ut lobortis aliquam, eros nisl semper mauris, ut varius velit dolor ut magna.'
                    />
                </div>
            </div>
        </ServicesItemStyles>
    )
}

export default ServicesSection;
