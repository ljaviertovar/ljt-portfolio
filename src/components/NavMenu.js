import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { MdClose, MdMenu } from 'react-icons/md';

const NavMenuStyles = styled.nav`
   
`;

const NavMenu = () => {

    const [showNav, setShowNav] = useState(false);

    return (
        <NavMenuStyles>
            <div className='mobile-menu-icon'
                onClick={() => setShowNav(!showNav)}
                onKeyDown={() => setShowNav(!showNav)}
                role='button'
                tabIndex={0}
            >
                <MdMenu />
            </div>
            <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
                <div className='closeNavIcon'
                    onClick={() => setShowNav(!showNav)}
                    onKeyDown={() => setShowNav(!showNav)}
                    role='button'
                    tabIndex={0}
                >
                    <MdClose />
                </div>
                <li>
                    <NavLink to="/" exact
                        onClick={() => setShowNav(!showNav)}
                        onKeyDown={() => setShowNav(!showNav)}
                        role='button'
                        tabIndex={0}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about"
                        onClick={() => setShowNav(!showNav)}
                        onKeyDown={() => setShowNav(!showNav)}
                        role='button'
                        tabIndex={0}
                    >About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects"
                        onClick={() => setShowNav(!showNav)}
                        onKeyDown={() => setShowNav(!showNav)}
                        role='button'
                        tabIndex={0}
                    >Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact"
                        onClick={() => setShowNav(!showNav)}
                        onKeyDown={() => setShowNav(!showNav)}
                        role='button'
                        tabIndex={0}
                    >Contact</NavLink>
                </li>
            </ul>
        </NavMenuStyles>
    )
}

export default NavMenu;