import React from 'react';
import styled from 'styled-components';

import PText from './PText';

import { MdDesktopMac } from 'react-icons/md';

const ItemStyles = styled.div`
text-align: center;
.servicesItem__icon {
    svg {
        width: 3rem;
    }
}

.servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
}

.para {
    margin-top: 2rem;
}
`;

const ServicesSectionItem = ({
    icon = <MdDesktopMac />,
    title = 'web Design',
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque laoreet risus ac iaculis. Integer vel molestie orci. Nullam scelerisque, sem ut lobortis aliquam, eros nisl semper mauris, ut varius velit dolor ut magna.'
}) => {
    return (
        <ItemStyles>
            <div className='servicesItem__icon'>
                {icon}
            </div>
            <div className='servicesItem__title'>
                {title}
            </div>
            <PText>
                {description}
            </PText>
        </ItemStyles>
    )
}

export default ServicesSectionItem
